import React, { useState } from "react";
import Login from "../Authentication/Login"; // Import Login component

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control popup visibility

  // Function to toggle the login popup visibility
  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="bg-blue-400 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-200 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200 transition">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200 transition">Contact</a>
          </li>
          <li>
            {/* Click on this to toggle the login popup */}
            <a
              href="#"
              onClick={toggleLoginPopup}
              className="hover:text-gray-200 transition"
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* If isLoginOpen is true, show the Login form as a popup */}
      {isLoginOpen && <Login />}
    </nav>
  );
};

export default Navbar;
