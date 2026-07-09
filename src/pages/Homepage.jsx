import React from 'react'
import Navbar from '../components/Navbar'
import Navtabs from '../components/Navtabs'
import Searchbar from '../components/Searchbar'
import PropertyCards from '../components/PropertyCards'
import properties from '../data/properties'
import Categories from '../components/Categories'

const Homepage = () => {
  return (
    <div>
     <Navbar/>
     <Navtabs/>
     <Searchbar/>
     <Categories/>
     <div className='grid grid-cols-4 gap-6 p-6'>
      {
  properties.map((property) => (
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
