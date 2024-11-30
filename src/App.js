import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Components/Home/Home";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login  from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
