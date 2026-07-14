import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Navtabs from '../components/Navtabs'
import Searchbar from '../components/Searchbar'
import PropertyCards from '../components/PropertyCards'
import properties from '../data/properties'
import Categories from '../components/Categories'


const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
 const filteredProperties =
  selectedCategory === "All"
    ? properties
    : properties.filter(
        (property) => property.category === selectedCategory
      );
  return (
    <div>
     <Navbar/>
     <Navtabs/>
     <Searchbar/>
     <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    />
     <div className='grid grid-cols-4 gap-6 p-6'>
      {
  filteredProperties.map((property) => (
    <PropertyCards
      key={property.id}
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
