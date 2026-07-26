const express = require("express");
const authRoutes = require("./routes/auth.routes");
const propertyRoutes = require("./routes/property.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

module.exports = app;