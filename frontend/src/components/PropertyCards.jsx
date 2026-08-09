import { Star, Heart } from "lucide-react";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const PropertyCards = ({
  id,
  image,
  location,
  price,
  rating,
  distance,
  dates,
}) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const liked = wishlist.some((item) => item._id === id);

  return (
    <div className="group relative">
      <Link to={`/property/${id}`}>
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={location}
            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Guest favourite badge */}
          {rating >= 4.8 && (
            <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              Guest favourite
            </span>
          )}
        </div>

        {/* Property details */}
        <div className="mt-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-base truncate">
              {location}
            </h3>

            <div className="flex items-center gap-1 shrink-0">
              <Star
                size={15}
                fill="currentColor"
                strokeWidth={0}
              />
              <span className="text-sm">
                {rating || "New"}
              </span>
            </div>
          </div>

          {distance && (
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {distance}
            </p>
          )}

          {dates && (
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {dates}
            </p>
          )}

          <p className="mt-2">
            <span className="font-semibold">
              ₹{price}
            </span>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              night
            </span>
          </p>
        </div>
      </Link>

      {/* Wishlist button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          toggleWishlist({
            _id: id,
            images: [image],
            location,
            price,
            rating,
            distance,
            dates,
          });
        }}
        className="absolute top-3 right-3 p-2 hover:scale-110 transition"
      >
        <Heart
          size={25}
          className={liked ? "text-red-500" : "text-white"}
          fill={liked ? "red" : "rgba(0,0,0,0.35)"}
          strokeWidth={2}
        />
      </button>
    </div>
  );
};

export default PropertyCards;