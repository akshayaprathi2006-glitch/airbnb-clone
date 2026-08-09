import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Navtabs from "../components/Navtabs";
import PropertyCards from "../components/PropertyCards";
import axios from "axios";
import Categories from "../components/Categories";
import SearchFilter from "../components/SearchFilter";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [recentProperties, setRecentProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/properties"
        );

        setProperties(res.data.properties);

        const viewed =
          JSON.parse(localStorage.getItem("recentProperties")) || [];

        setRecentProperties(viewed);

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Search properties
  const filteredProperties = properties.filter((property) => {
    const matchesCategory = true;

    const matchesSearch = property.location
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Remove recently viewed properties from main list
  const sortedProperties = filteredProperties.filter(
    (property) =>
      !recentProperties.some(
        (recent) => recent._id === property._id
      )
  );

  // Sorting
  if (sortBy === "priceLow") {
    sortedProperties.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "priceHigh") {
    sortedProperties.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    sortedProperties.sort((a, b) => b.rating - a.rating);
  }

  // Loading screen
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navbar />
        <Navtabs />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-10">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              {/* Image skeleton */}
              <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-xl"></div>

              {/* Title skeleton */}
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>

              {/* Location skeleton */}
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-3/4"></div>

              {/* Price skeleton */}
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* NAV TABS */}
      <Navtabs />

      {/* SEARCH + SORT */}
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* CATEGORIES */}
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* ============================= */}
      {/* RECENTLY VIEWED */}
      {/* ============================= */}

      {recentProperties.length > 0 && (
        <section className="px-6 md:px-10 mt-8">

          <h2 className="text-2xl font-semibold mb-5">
            Recently Viewed
          </h2>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">

            {recentProperties.map((property) => (
              <div
                key={property._id}
                className="w-[240px] sm:w-[260px] shrink-0"
              >
                <PropertyCards
                  id={property._id}
                  image={property.images?.[0]}
                  location={property.location}
                  price={property.price}
                  rating={property.rating}
                  distance={property.distance}
                  dates={property.dates}
                />
              </div>
            ))}

          </div>
        </section>
      )}

      {/* ============================= */}
      {/* MAIN PROPERTIES */}
      {/* ============================= */}

      <section className="px-6 md:px-10 mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Explore stays
        </h2>

        {sortedProperties.length > 0 ? (

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">

            {sortedProperties.map((property) => (
              <div
                key={property._id}
                className="w-[240px] sm:w-[260px] shrink-0"
              >
                <PropertyCards
                  id={property._id}
                  image={property.images?.[0]}
                  location={property.location}
                  price={property.price}
                  rating={property.rating}
                  distance={property.distance}
                  dates={property.dates}
                />
              </div>
            ))}

          </div>

        ) : (

          <div className="flex flex-col items-center justify-center py-20">

            <h2 className="text-3xl font-bold">
              😔 No properties found
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Try searching for another location or category.
            </p>

          </div>

        )}

      </section>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP */}
      <BackToTop />

    </div>
  );
};

export default Homepage;