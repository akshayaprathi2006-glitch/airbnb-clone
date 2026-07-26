import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import PropertyCards from "../components/PropertyCards";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
       <div className="flex flex-col items-center justify-center py-24">
  <h2 className="text-4xl font-bold">
    💔 Your wishlist is empty
  </h2>

  <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
    Save your favourite homes to see them here.
  </p>

  <Link to="/">
    <button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold transition">
      Browse Properties
    </button>
  </Link>
</div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {wishlist.map((property) => (
            <PropertyCards
              key={property.id}
              id={property.id}
              image={property.image}
              location={property.location}
              price={property.price}
              rating={property.rating}
              distance={property.distance}
              dates={property.dates}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;