import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PropertyCards from "../components/PropertyCards";
import axios from "axios";
import Categories from "../components/Categories";
import SearchFilter from "../components/SearchFilter";
import Footer from "../components/Footer";
import BackToTop from "../components/BacktoTop";

const Homepage = () => {
  // --------------------------------------------------
  // STATES
  // --------------------------------------------------

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchText, setSearchText] = useState("");

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [bookedPropertyIds, setBookedPropertyIds] = useState([]);

  const [sortBy, setSortBy] = useState("");

  const [loading, setLoading] = useState(true);

  const [properties, setProperties] = useState([]);

  // --------------------------------------------------
  // FETCH ALL PROPERTIES
  // --------------------------------------------------

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/properties`
        );

        console.log("All properties:", res.data?.properties);

        setProperties(res.data?.properties || []);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch properties:", error);

        setProperties([]);

        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // --------------------------------------------------
  // CHECK PROPERTY AVAILABILITY
  // --------------------------------------------------

  const checkPropertyAvailability = async () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings/check-availability`,
        {
          checkIn,
          checkOut,
        }
      );

      setBookedPropertyIds(res.data.bookedPropertyIds || []);
    } catch (error) {
      console.error("Failed to check availability:", error);

      alert(
        error.response?.data?.message ||
          "Failed to check property availability"
      );
    }
  };

  // --------------------------------------------------
  // FILTER PROPERTIES
  // --------------------------------------------------

  const filteredProperties = properties.filter((property) => {
    // CATEGORY
    const matchesCategory =
      selectedCategory === "All" ||
      property.category === selectedCategory;

    // SEARCH
    const search = searchText.toLowerCase().trim();

    const matchesSearch =
      (property?.location || "")
        .toLowerCase()
        .includes(search) ||
      (property?.title || "")
        .toLowerCase()
        .includes(search) ||
      (property?.description || "")
        .toLowerCase()
        .includes(search);

    // AVAILABILITY
    const isAvailable =
      !bookedPropertyIds.includes(property._id);

    return (
      matchesCategory &&
      matchesSearch &&
      isAvailable
    );
  });

  // --------------------------------------------------
  // SORT PROPERTIES
  // --------------------------------------------------

  const sortedProperties = [...filteredProperties];

  if (sortBy === "priceLow") {
    sortedProperties.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "priceHigh") {
    sortedProperties.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortBy === "rating") {
    sortedProperties.sort(
      (a, b) =>
        (b.rating || 0) -
        (a.rating || 0)
    );
  }

  // --------------------------------------------------
  // GROUP PROPERTIES BY LOCATION
  // --------------------------------------------------

  const groupedProperties = sortedProperties.reduce(
    (groups, property) => {
      const location =
        property?.location?.trim() || "Other places";

      if (!groups[location]) {
        groups[location] = [];
      }

      groups[location].push(property);

      return groups;
    },
    {}
  );

  // --------------------------------------------------
  // SCROLL SECTION
  // --------------------------------------------------

  const scrollSection = (location, direction) => {
    const safeId = `property-slider-${location
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "")
      .toLowerCase()}`;

    document
      .getElementById(safeId)
      ?.scrollBy({
        left: direction === "left" ? -800 : 800,
        behavior: "smooth",
      });
  };

  // --------------------------------------------------
  // LOADING SCREEN
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navbar />

        <div className="px-6 md:px-10 py-10">
          <div className="flex gap-5 overflow-hidden">

            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[240px] animate-pulse"
              >
                <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-xl"></div>

                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-3/4"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
  // --------------------------------------------------
  // MAIN PAGE
  // --------------------------------------------------
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">
      {/* NAVBAR */}
      <Navbar />
      {/* SEARCH */}
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        sortBy={sortBy}
        setSortBy={setSortBy}
        checkAvailability={checkPropertyAvailability}
      />
      {/* CATEGORIES */}
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* --------------------------------------------------
          LOCATION SECTIONS
      -------------------------------------------------- */}
      {Object.keys(groupedProperties).length > 0 ? (
        <div className="mt-10">
          {Object.entries(groupedProperties).map(
            ([location, locationProperties]) => {
              const sliderId = `property-slider-${location
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9-_]/g, "")
                .toLowerCase()}`;
              return (
                <section
                  key={location}
                  className="px-6 md:px-10 mb-10"
                >
                  {/* ----------------------------------
                      SECTION HEADER
                  ---------------------------------- */}
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-2xl font-semibold">
                      Places in {location}
                    </h2>
                    {/* ARROWS */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          scrollSection(
                            location,
                            "left"
                          )
                        }
                        className="
                          w-9
                          h-9
                          rounded-full
                          border
                          border-gray-300
                          flex
                          items-center
                          justify-center
                          hover:bg-gray-100
                          dark:hover:bg-gray-800
                          transition
                        "
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          scrollSection(
                            location,
                            "right"
                          )
                        }
                        className="
                          w-9
                          h-9
                          rounded-full
                          border
                          border-gray-300
                          flex
                          items-center
                          justify-center
                          hover:bg-gray-100
                          dark:hover:bg-gray-800
                          transition
                        "
                      >
                        →
                      </button>
                    </div>
                  </div>
                  {/* ----------------------------------
                      PROPERTY CARDS
                  ---------------------------------- */}
                  <div
                    id={sliderId}
                    className="
                      flex
                      gap-5
                      overflow-x-auto
                      pb-5
                      scrollbar-hide
                      scroll-smooth
                    "
                  >
                    {locationProperties.map(
                      (property) => (
                        <div
                          key={property._id}
                          className="
                            flex-none
                            w-[240px]
                            sm:w-[250px]
                            md:w-[260px]
                          "
                        >
                          <PropertyCards
                            id={property._id}
                            image={property.images?.[0]}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            rating={property.rating}
                            distance={property.distance}
                            dates={property.dates}
                          />
                        </div>
                      )
                    )}
                  </div>
                </section>
              );
            }
          )}
        </div>
      ) : (
        /* --------------------------------------------------
            NO PROPERTIES
        -------------------------------------------------- */
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl font-bold">
            😔 No properties found
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Try searching for another location or category.
          </p>
        </div>
      )}
      {/* FOOTER */}
      <Footer />
      {/* BACK TO TOP */}
      <BackToTop />
    </div>
  );
};

export default Homepage;