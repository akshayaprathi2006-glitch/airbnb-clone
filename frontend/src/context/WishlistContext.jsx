import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const toggleWishlist = (property) => {

    const exists = wishlist.some(
      (item) => item._id === property._id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item._id !== property._id
      );
    } else {
      updatedWishlist = [...wishlist, property];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
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