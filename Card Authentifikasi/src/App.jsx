import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/fragments/Navbar";
import Landing from "./components/fragments/Landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./components/fragments/Dashboard";

// 🔹 Import halaman Warung
import Warung1 from "./components/fragments/Warung1";
import { Frame2 } from "./components/fragments/Frame2"; // Import Frame2 for warung pages

function App() {
  return (
    <Router>
      {/* Navbar selalu tampil */}
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Landing />} />

        {/* Halaman login & register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🔹 Halaman kantin dengan dynamic parameter */}
        <Route path="/warung/:kantinId" element={<Frame2 />} />
        
        {/* Keep existing Warung1 route for backward compatibility */}
        <Route path="/Warung1" element={<Warung1 />} />
        
      </Routes>
    </Router>
  );
}

export default App;