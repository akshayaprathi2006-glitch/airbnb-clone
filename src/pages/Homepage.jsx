import React from 'react'
import Navbar from '../components/Navbar'
import Navtabs from '../components/Navtabs'
import Searchbar from '../components/Searchbar'
import PropertyCards from '../components/PropertyCards'
import properties from '../data/properties'

const Homepage = () => {
  return (
    <div>
     <Navbar/>
     <Navtabs/>
     <Searchbar/>
     {
  properties.map((property) => (
    <PropertyCards
      key={property.id}
      image={property.image}
      location={property.location}
      price={property.price}
      rating={property.rating}
    />
  ))
}
    </div>
  )
}

export default Homepage
