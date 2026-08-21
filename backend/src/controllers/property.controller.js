const uploadToCloudinary = require("../utils/cloudinaryUpload"); 
const Property = require("../models/property.model");
const Booking = require("../models/booking.model");

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      location,
      category,
      guests,
      bedrooms,
      bathrooms,
      amenities,
    } = req.body;

    let imageUrls = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const uploadedImage = await uploadToCloudinary(file.buffer);
        imageUrls.push(uploadedImage.secure_url);
      }
    }

    const property = await Property.create({
      title,
      description,
      price,
      location,
      category,
      images: imageUrls,
      guests,
      bedrooms,
      bathrooms,
      amenities,
      host: req.user.id,
    });

    res.status(201).json({
      message: "Property created successfully",
      property,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate("host", "name email");

        return res.status(200).json({
            message: "Properties fetched successfully",
            properties,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const searchProperties = async (req, res) => {
  try {
    const { location, checkIn, checkOut, category } = req.query;

    const query = {};

    // Location search
    if (location) {
      query.location = {
        $regex: location,
        $options: "i",
      };
    }

    // Category search
    if (category && category !== "All") {
      query.category = category;
    }

    let properties = await Property.find(query).populate(
      "host",
      "name email"
    );

    // Date availability
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate <= checkInDate) {
        return res.status(400).json({
          message: "Check-out date must be after check-in date",
        });
      }

      const conflictingBookings = await Booking.find({
        status: "confirmed",
        checkIn: { $lt: checkOutDate },
        checkOut: { $gt: checkInDate },
      }).select("property");

      const bookedPropertyIds = conflictingBookings.map(
        (booking) => booking.property.toString()
      );

      properties = properties.filter(
        (property) =>
          !bookedPropertyIds.includes(property._id.toString())
      );
    }

    return res.status(200).json({
      message: "Properties searched successfully",
      properties,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await Property.findById(id).populate(
            "host",
            "name email"
        );

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        return res.status(200).json({
            message: "Property fetched successfully",
            property,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        // Check ownership
        if (property.host.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You are not authorized to update this property",
            });
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );

        return res.status(200).json({
            message: "Property updated successfully",
            property: updatedProperty,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        // Check ownership
        if (property.host.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You are not authorized to delete this property",
            });
        }

        await Property.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Property deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      host: req.user.id,
    });

    res.status(200).json({
      properties,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { 
  createProperty, 
  getAllProperties, 
  searchProperties,
  getPropertyById, 
  updateProperty, 
  deleteProperty, 
  getMyProperties, 
};