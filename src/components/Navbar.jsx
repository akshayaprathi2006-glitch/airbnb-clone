import React from 'react'
import {Globe} from 'lucide-react'
import {Menu} from 'lucide-react'
import logo from "../assets/images.png";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-6'>
       <div className='flex items-center gap-2'>
      <img className='w-12 ' src={logo} alt="Airbnb logo" />
      <h1 className='font-bold text-2xl text-[#FF385C]'>airbnb</h1>
    </div>
    <div className='flex items-center gap-4'>
      <h2 className='font-medium'>Become a host</h2>
    <button className='bg-gray-300'><Globe size={16} strokeWidth={1.5} /></button>
    <button  className='bg-gray-300'><Menu size={16} strokeWidth={1.5} /></button>
    </div>
    
    </nav>
   
  )
}

export default Navbar
