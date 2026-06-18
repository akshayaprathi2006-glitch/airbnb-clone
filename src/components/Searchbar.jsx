import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex gap-20  items-center w-fit justify-center border rounded-full px-4 py-2 shadow-md'>

      <div>
        <h4 className='font-semibold'>Where</h4>
        <p className='text-gray-500'>Search destinations</p>
      </div>
      <div className='h-8 border-r border-gray-500'></div>
      <div>
        <h4 className='font-semibold'>When</h4>
        <p className='text-gray-500'>Add dates</p>
      </div>
      <div className='h-8 border-r border-gray-500'></div>
      <div>
        <h4 className='font-semibold'>Who</h4>
        <p className='text-gray-500'>Add guests</p>
      </div>
      <button><Search /></button>

    </div>
    </div>
  )
}

export default Searchbar
