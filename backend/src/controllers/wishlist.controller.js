const Wishlist = require("../models/wishlist.model");

const addToWishlist = async (req, res) => {
    try {
        const { propertyId } = req.body;

        if (!propertyId) {
            return res.status(400).json({
                message: "Property ID is required",
            });
        }

        const existingWishlist = await Wishlist.findOne({
            user: req.user.id,
            property: propertyId,
        });

        if (existingWishlist) {
            return res.status(400).json({
                message: "Property already exists in wishlist",
            });
        }

        const wishlist = await Wishlist.create({
            user: req.user.id,
            property: propertyId,
        });

        return res.status(201).json({
            message: "Property added to wishlist",
            wishlist,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
const getMyWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({
            user: req.user.id,
        }).populate(
            "property",
            "title location images price bedrooms bathrooms guests"
        );

        return res.status(200).json({
            message: "Wishlist fetched successfully",
            wishlist,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
const removeFromWishlist = async (req, res) => {
    try {
        const { propertyId } = req.params;

        await Wishlist.findOneAndDelete({
            user: req.user.id,
            property: propertyId,
        });

        return res.status(200).json({
            message: "Property removed from wishlist",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    addToWishlist,
    getMyWishlist,
    removeFromWishlist,
};