import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For handling errors
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset error

    try {
      // API request to login
      const response = await axios.post(
        "http://localhost:8000/api/auth/login", // Replace with your backend login API URL
        {
          email,
          password,
        }
      );

      console.log("Login Successful:", response.data);
      // Store token in localStorage or cookies
      localStorage.setItem("authToken", response.data.token);

      // Navigate to the dashboard or home page after successful login
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed");
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-80 shadow-lg relative">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h2>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-blue-600 text-2xl"
          onClick={() => window.location.reload()} // Close the popup
        >
          <FaTimes />
        </button>

        <form onSubmit={handleLogin}>
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
              className="w-full p-2 border border-blue-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Register Link */}
        <p className="text-center text-black mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
