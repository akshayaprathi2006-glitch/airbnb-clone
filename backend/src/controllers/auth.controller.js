const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            message: "User already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return res.status(201).json({
        message: "User registered successfully",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    console.log("Email from React:", email);
    console.log("Password from React:", password);

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required",
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }

    console.log("User found:", user.email);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password Match:", isMatch);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    return res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
};
module.exports = {
    register,
    login,
};