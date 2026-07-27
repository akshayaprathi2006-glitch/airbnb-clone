const Property = require("../models/property.model");

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      location,
      images,
      guests,
      bedrooms,
      bathrooms,
      amenities,
    } = req.body;

    if (!title || !description || !price || !location) {
    return res.status(400).json({
        message: "Title, description, price and location are required"
    });
}

    const property = await Property.create({
      title,
      description,
      price,
      location,
      images,
      guests,
      bedrooms,
      bathrooms,
      amenities,

      host: req.user.id,
    });

    return res.status(201).json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
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

module.exports = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
};