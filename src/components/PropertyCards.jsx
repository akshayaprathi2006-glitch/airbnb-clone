import { Star } from 'lucide-react';

const PropertyCards = ({image,location,price,rating}) => {
  return (
    <div className="w-80 p-4">
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={image}
    alt={location}
  />

  <div className="flex justify-between mt-2">
    <h2 className="font-semibold">{location}</h2>

    <div className="flex items-center gap-1">
      <Star size={16} fill="black" />
      <span>{rating}</span>
    </div>
  </div>

  <p className="text-gray-600">₹{price}for 2 days</p>
</div>
)}

export default PropertyCards
