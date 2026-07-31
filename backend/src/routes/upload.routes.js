const express = require("express");
const upload = require("../middleware/upload.middleware");
const { uploadImage } = require("../controllers/upload.controller");

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);

module.exports = router;