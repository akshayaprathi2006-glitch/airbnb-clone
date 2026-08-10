const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const propertyRoutes = require("./routes/property.routes");
const uploadRoutes = require("./routes/upload.routes");
const bookingRoutes = require("./routes/booking.routes");
const wishlistRoutes = require("./routes/wishlist.routes");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://airbnb-clone-1-ktah.onrender.com"
    ],
    credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/wishlist", wishlistRoutes);

module.exports = app;