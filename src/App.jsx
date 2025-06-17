// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Wellness from "./pages/Wellness";
import Workouts from "./pages/Workouts";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}
