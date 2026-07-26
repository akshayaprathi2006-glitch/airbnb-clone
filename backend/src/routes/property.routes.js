const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { createProperty } = require("../controllers/property.controller");

const router = express.Router();

router.post("/", authMiddleware, createProperty);

module.exports = router;