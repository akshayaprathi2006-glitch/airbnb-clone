import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import PropertyCards from "../components/PropertyCards";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-lg">
          Your wishlist is empty.
        </p>
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