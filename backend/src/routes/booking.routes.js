const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  createBooking,
  getMyBookings,
  cancelBooking,
  getHostBookings,
  checkAvailability
} = require("../controllers/booking.controller");

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.post("/check-availability", checkAvailability);
router.get("/my", authMiddleware, getMyBookings);
router.put("/:id/cancel", authMiddleware, cancelBooking);
router.get("/host", authMiddleware, getHostBookings);
module.exports = router;