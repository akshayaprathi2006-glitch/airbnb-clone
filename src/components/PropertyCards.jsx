import { Star } from 'lucide-react';
import {Heart} from 'lucide-react';
import { useState } from 'react';

const PropertyCards = ({image,location,price,rating,distance,dates}) => {
  const [liked, setLiked] = useState(false)
 
   const change=()=> {
     setLiked(prevLiked => !prevLiked)
  }

  return (

    <div className=' relative w-full p-4 hover:scale-105 transition duration-300 cursor-pointer'>
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={image}
    alt={location}
  />
  
  <button  onClick={change} className="absolute top-5 right-6 p-1 rounded-full bg-black/20 hover:bg-black/40 transition"><Heart className={liked?"text-red-500":"text-white"} size={24} fill={liked?"red":"none"} /></button>

  <div className="flex justify-between mt-2">
    <h2 className="font-semibold">{location}</h2>

    <div className="flex items-center gap-1">
      <Star size={16} fill="black" strokeWidth={0} />
      <span>{rating}</span>
    </div>
  </div>

  <p className="text-gray-600 font-semibold mt-1">₹{price} for 2 days</p>
  <p className="text-gray-500">{distance}</p>
<p className="text-gray-500">{dates}</p>
</div>
)}

export default PropertyCards
