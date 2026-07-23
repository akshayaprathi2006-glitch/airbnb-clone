import { Star } from 'lucide-react';
import {Heart} from 'lucide-react';
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const PropertyCards = ({id,image,location,price,rating,distance,dates}) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
 
   const liked = wishlist.some((item) => item.id === id);

  return (
    <Link to={`/property/${id}`}>
       <div className=' relative w-full p-4 hover:scale-105 transition duration-300 cursor-pointer'>
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={image}
    alt={location}
  />
  
  <button 
  onClick={(e) => {
    e.preventDefault();
    toggleWishlist({
      id,
      image,
      location,
      price,
      rating,
      distance,
      dates,
    });
  }}
  className="absolute top-5 right-6 p-1 rounded-full bg-black/20 hover:bg-black/40 transition">
    <Heart className={liked?"text-red-500":"text-white"} size={24} fill={liked?"red":"none"} /></button>

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
    </Link>
   
)}

export default PropertyCards
