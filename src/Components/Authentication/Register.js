import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For handling errors
  const [success, setSuccess] = useState(false); // For handling success messages
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Clear previous error and success states
      setError(null);
      setSuccess(false);

      // API request to register
      const response = await axios.post(
        "http://localhost:5000/api/auth/register", // Replace with your backend API URL
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data.message); // Debugging/logging
      setSuccess(true); // Show success message

      // Optionally navigate to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleClose = () => {
    navigate("/home"); // Navigate to Home.js page when close button is clicked
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-80 shadow-lg relative">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Register</h2>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-blue-600 text-2xl"
          onClick={handleClose}
        >
          <FaTimes />
        </button>

        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-600 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-blue-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-600 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-blue-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-600 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-blue-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="text-center text-green-500 mt-4">
            Registration successful! Redirecting to login...
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-center text-red-500 mt-4">
            {error}
          </p>
        )}

        {/* Login Link */}
        <p className="text-center text-black mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
