import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/auth/register`,
    {
        name: formData.name,
        email: formData.email,
        password: formData.password,
    }
);

      console.log("SIGNUP RESPONSE:", response.data);

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.log("SIGNUP ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to create account"
      );
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">

      <h1 className="text-3xl font-bold text-center mb-2">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Sign up to start booking amazing stays
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Sign Up
        </button>

      </form>

      <div className="flex items-center my-6">
        <div className="flex-1 border-t"></div>

        <span className="mx-3 text-gray-500">
          or
        </span>

        <div className="flex-1 border-t"></div>
      </div>

      <button className="w-full border py-3 rounded-lg font-medium hover:bg-gray-100 transition">
        Continue with Google
      </button>

      <p className="text-center mt-6">
        Already have an account?{" "}

        <Link
          to="/login"
          className="text-rose-500 font-semibold"
        >
          Login
        </Link>
      </p>

    </div>
  );
};

export default Signup;