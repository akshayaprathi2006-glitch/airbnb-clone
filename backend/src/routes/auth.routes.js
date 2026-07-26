const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome!",
        user: req.user,
    });
});

module.exports = router;