import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (property) => {
    const exists = wishlist.find((item) => item.id === property.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== property.id));
    } else {
      setWishlist([...wishlist, property]);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;