import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Navtabs from '../components/Navtabs'
import PropertyCards from '../components/PropertyCards'
import properties from '../data/properties'
import Categories from '../components/Categories'
import SearchFilter from '../components/SearchFilter'


const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [recentProperties, setRecentProperties] = useState([]);
  useEffect(() => {
  const viewed =
    JSON.parse(localStorage.getItem("recentProperties")) || [];

  setRecentProperties(viewed);
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

const sortedProperties = [...filteredProperties];

if (sortBy === "priceLow") {
  sortedProperties.sort((a, b) => a.price - b.price);
}

if (sortBy === "priceHigh") {
  sortedProperties.sort((a, b) => b.price - a.price);
}

if (sortBy === "rating") {
  sortedProperties.sort((a, b) => b.rating - a.rating);
}
  return (
    <div>
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

    <div className="grid grid-cols-4 gap-6">
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
     <div className='grid grid-cols-4 gap-6 p-6'>
      {
        sortedProperties.map((property) => (
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
  ))
}
     </div>
    </div>
  )
}

export default Homepage
