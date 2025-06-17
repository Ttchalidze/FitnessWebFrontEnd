// src/pages/Dashboard.jsx
import React from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard container">
      <h1>Welcome Back!</h1>
      <button>Add Random Workouts</button>
      <div className="workout-list">
        <div className="workout-item">No workouts yet.</div>
      </div>
    </section>
  );
}
