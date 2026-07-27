const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
    createProperty,
    getAllProperties,
     getPropertyById,
     updateProperty,
     deleteProperty
} = require("../controllers/property.controller");

const router = express.Router();

router.post("/", authMiddleware, createProperty);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

module.exports = router;