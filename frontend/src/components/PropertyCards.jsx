import { Star, Heart } from "lucide-react";
import { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";

const PropertyCards = ({
  id,
  image,
  title,
  location,
  price,
  rating,
  distance,
  dates,
}) => {
  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const liked = wishlist.some(
    (item) => item._id === id
  );

  return (
    <div className="group relative min-w-0">

      {/* ================= PROPERTY ================= */}

      <Link to={`/property/${id}`}>

        {/* ================= IMAGE ================= */}

        <div className="relative aspect-[20/19] overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800">

          <img
            src={image}
            alt={title || location || "Stay"}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* GUEST FAVOURITE */}

          {rating >= 4.8 && (
            <span
              className="
                absolute
                top-3
                left-3
                bg-white
                text-black
                px-3
                py-1.5
                rounded-full
                text-xs
                font-semibold
                shadow-sm
              "
            >
              Guest favourite
            </span>
          )}

        </div>

        {/* ================= DETAILS ================= */}

        <div className="mt-3">

          {/* LOCATION + RATING */}

          <div className="flex items-center justify-between gap-2">

            <h3
              className="
                font-semibold
                text-[15px]
                truncate
                text-gray-900
                dark:text-white
              "
            >
              {location || title || "Stay"}
            </h3>

            <div className="flex items-center gap-1 shrink-0">

              <Star
                size={14}
                fill="currentColor"
                strokeWidth={0}
              />

              <span className="text-sm">
                {rating || "New"}
              </span>

            </div>

          </div>

          {/* TITLE */}

          {title && title !== location && (
            <p
              className="
                text-gray-600
                dark:text-gray-400
                text-sm
                mt-1
                truncate
              "
            >
              {title}
            </p>
          )}

          {/* DISTANCE */}

          {distance && (
            <p
              className="
                text-gray-500
                dark:text-gray-400
                text-sm
                mt-1
              "
            >
              {distance}
            </p>
          )}

          {/* DATES */}

          {dates && (
            <p
              className="
                text-gray-500
                dark:text-gray-400
                text-sm
                mt-1
              "
            >
              {dates}
            </p>
          )}

          {/* PRICE */}

          <p className="mt-2 text-sm">

            <span
              className="
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              ₹{price}
            </span>

            <span
              className="
                text-gray-600
                dark:text-gray-400
              "
            >
              {" "}night
            </span>

          </p>

        </div>

      </Link>

      {/* ================= WISHLIST ================= */}

      <button
        type="button"
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
            title,
            location,
            price,
            rating,
            distance,
            dates,
          });

        }}
        className="
          absolute
          top-2.5
          right-2.5
          p-1.5
          hover:scale-110
          transition
          z-10
        "
        aria-label="Add to wishlist"
      >

        <Heart
          size={25}
          className={
            liked
              ? "text-red-500"
              : "text-white"
          }
          fill={
            liked
              ? "red"
              : "rgba(0,0,0,0.35)"
          }
          strokeWidth={2}
        />

      </button>

      {/* ================= LOGIN MODAL ================= */}

      {showLoginModal && (

        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-[100]
          "
          onClick={() =>
            setShowLoginModal(false)
          }
        >

          <div
            className="
              bg-white
              rounded-2xl
              p-8
              w-[90%]
              max-w-[400px]
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <h2 className="text-2xl font-bold text-center">
              Login required
            </h2>

            <p className="text-gray-500 text-center mt-3">
              Please log in to add properties to your wishlist.
            </p>

            <div className="flex gap-3 mt-7">

              <button
                type="button"
                onClick={() =>
                  setShowLoginModal(false)
                }
                className="
                  flex-1
                  border
                  border-gray-300
                  rounded-xl
                  py-3
                  font-semibold
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate("/login")
                }
                className="
                  flex-1
                  bg-[#FF385C]
                  text-white
                  rounded-xl
                  py-3
                  font-semibold
                  hover:bg-[#e31c5f]
                "
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