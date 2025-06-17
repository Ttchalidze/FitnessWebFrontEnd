// src/pages/Workouts.jsx
import React from "react";
import "../styles/workouts.css";

export default function Workouts() {
  return (
    <section className="workouts container">
      <h1>Workout Explorer</h1>
      <div className="muscle-groups">
        <div className="muscle-card">
          <h3>Chest</h3>
          <a href="#">View Exercises</a>
        </div>
        <div className="muscle-card">
          <h3>Legs</h3>
          <a href="#">View Exercises</a>
        </div>
        <div className="muscle-card">
          <h3>Arms</h3>
          <a href="#">View Exercises</a>
        </div>
      </div>
    </section>
  );
}
