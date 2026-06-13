import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className='flex gap-12 items-center justify-center border rounded-full px-6 py-3 shadow-md'>

      <div>
        <h4 className='font-semibold'>Where</h4>
        <p className='text-gray-500'>Search destinations</p>
      </div>
      <div>
        <h4 className='font-semibold'>When</h4>
        <p className='text-gray-500'>Add dates</p>
      </div>
      <div>
        <h4 className='font-semibold'>Who</h4>
        <p className='text-gray-500'>Add guests</p>
      </div>
      <button><Search /></button>

    </div>
  )
}

export default Searchbar
