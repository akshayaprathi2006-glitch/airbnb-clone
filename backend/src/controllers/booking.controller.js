const Booking = require("../models/booking.model");
const Property = require("../models/property.model");

const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({
            guest: req.user.id,
        })
            .populate("property", "title location images price")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Bookings fetched successfully",
            bookings,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found",
            });
        }

        // Only the guest who created the booking can cancel it
        if (booking.guest.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You are not authorized to cancel this booking",
            });
        }

        booking.status = "cancelled";
        await booking.save();

        return res.status(200).json({
            message: "Booking cancelled successfully",
            booking,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getHostBookings = async (req, res) => {
    try {

        const properties = await Property.find({
            host: req.user.id,
        });

        const propertyIds = properties.map(property => property._id);

        const bookings = await Booking.find({
            property: { $in: propertyIds },
        })
        .populate("guest", "name email")
        .populate("property", "title location")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Host bookings fetched successfully",
            bookings,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const createBooking = async (req, res) => {
    try {
        const { propertyId, checkIn, checkOut, guests } = req.body;

        // Validate request
        if (!propertyId || !checkIn || !checkOut || !guests) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // Find property
        const property = await Property.findById(propertyId);

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        // Calculate total days
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const totalDays = Math.ceil(
            (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
        );

        if (totalDays <= 0) {
            return res.status(400).json({
                message: "Invalid booking dates",
            });
        }
        // Check if property is already booked for the selected dates
const existingBooking = await Booking.findOne({
  property: propertyId,
  status: "confirmed",
  $or: [
    {
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    },
  ],
});

if (existingBooking) {
  return res.status(400).json({
    message: "Property is already booked for the selected dates",
  });
}

        // Calculate price
        const totalPrice = totalDays * property.price;

        // Create booking
        const booking = await Booking.create({
            property: property._id,
            guest: req.user.id,
            checkIn,
            checkOut,
            guests,
            totalPrice,
        });

        return res.status(201).json({
            message: "Booking created successfully",
            booking,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createBooking,
    getMyBookings,
    cancelBooking,
    getHostBookings,
};