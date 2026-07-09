import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className='flex justify-center mt-6'>
      <div className='flex gap-20  items-center w-[850px] justify-center border rounded-full  shadow-md'>

      <div className="flex-1 px-8 py-3">
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
