import { Star, Heart } from "lucide-react";
import { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const liked = wishlist.some((item) => item._id === id);
  
  return (
    <div className="group relative">
      <Link to={`/property/${id}`}>
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-square">
            <img
              src={image}
              alt={location || "Stay"}
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

            if (!user) {
              setShowLoginModal(true);
              return;
            }

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

{showLoginModal && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
    onClick={() => setShowLoginModal(false)}
  >
    <div
      className="bg-white rounded-2xl p-8 w-[90%] max-w-[400px] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold text-center">
        Login required
      </h2>

      <p className="text-gray-500 text-center mt-3">
        Please log in to add properties to your wishlist.
      </p>

      <div className="flex gap-3 mt-7">
        <button
          onClick={() => setShowLoginModal(false)}
          className="flex-1 border border-gray-300 rounded-xl py-3 font-semibold"
        >
          Cancel
        </button>

        <button
          onClick={() => navigate("/login")}
          className="flex-1 bg-[#FF385C] text-white rounded-xl py-3 font-semibold hover:bg-[#e31c5f]"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
)}

</div>
);
};

export default PropertyCards;