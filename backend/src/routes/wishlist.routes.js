const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
    addToWishlist,
    getMyWishlist,
    removeFromWishlist,
} = require("../controllers/wishlist.controller");

const router = express.Router();

router.post("/", authMiddleware, addToWishlist);
router.get("/", authMiddleware, getMyWishlist);

router.delete("/:propertyId", authMiddleware, removeFromWishlist);

module.exports = router;