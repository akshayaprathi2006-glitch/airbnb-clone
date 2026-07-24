import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Navtabs from '../components/Navtabs'
import PropertyCards from '../components/PropertyCards'
import properties from '../data/properties'
import Categories from '../components/Categories'
import SearchFilter from '../components/SearchFilter'
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";



const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [recentProperties, setRecentProperties] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const viewed =
    JSON.parse(localStorage.getItem("recentProperties")) || [];

  setRecentProperties(viewed);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
}, []);
  const filteredProperties = properties.filter((property) => {
  const matchesCategory =
    selectedCategory === "All" ||
    property.category === selectedCategory;

  const matchesSearch =
    property.location
      .toLowerCase()
      .includes(searchText.toLowerCase());

  return matchesCategory && matchesSearch;
});

const sortedProperties = filteredProperties.filter(
  (property) =>
    !recentProperties.some(
      (recent) => recent.id === property.id
    )
);

if (sortBy === "priceLow") {
  sortedProperties.sort((a, b) => a.price - b.price);
}

if (sortBy === "priceHigh") {
  sortedProperties.sort((a, b) => b.price - a.price);
}

if (sortBy === "rating") {
  sortedProperties.sort((a, b) => b.rating - a.rating);
}
if (loading) {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Navbar />
      <Navtabs />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>

            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>

            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-3/4"></div>

            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
  return (
  <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">
     <Navbar/>
     <Navtabs/>
     <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
         sortBy={sortBy}
         setSortBy={setSortBy}
      />
     <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    />
    {recentProperties.length > 0 && (
  <div className="px-6 mt-8">
    <h2 className="text-3xl font-bold mb-6">
      🕒 Recently Viewed
    </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recentProperties.map((property) => (
        <PropertyCards
          key={property.id}
          id={property.id}
          image={property.image}
          location={property.location}
          price={property.price}
          rating={property.rating}
          distance={property.distance}
          dates={property.dates}
        />
      ))}
    </div>
  </div>
)}
     <div className="p-6">
  {sortedProperties.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sortedProperties.map((property) => (
        <PropertyCards
          key={property.id}
          id={property.id}
          image={property.image}
          location={property.location}
          price={property.price}
          rating={property.rating}
          distance={property.distance}
          dates={property.dates}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold">😔 No properties found</h2>

      <p className="mt-3 text-gray-500 dark:text-gray-300">
        Try searching for another location or category.
      </p>
    </div>
  )}
</div>
     <Footer/>
     <BackToTop/>
    </div>
  )
}

export default Homepage
