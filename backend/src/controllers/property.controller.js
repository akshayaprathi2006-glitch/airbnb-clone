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

module.exports = {
  createProperty,
};