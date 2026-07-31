const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");
const {
    createProperty,
    getAllProperties,
     getPropertyById,
     updateProperty,
     deleteProperty
} = require("../controllers/property.controller");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    upload.array("images", 5),
    createProperty
);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

module.exports = router;