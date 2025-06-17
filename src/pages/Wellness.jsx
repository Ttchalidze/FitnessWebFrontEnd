// src/pages/Wellness.jsx
import React, { useState } from "react";
import "../styles/wellness.css";

export default function Wellness() {
  const [formData, setFormData] = useState({
    feeling: "",
    sleep: "",
    water: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Wellness data submitted!");
    setFormData({ feeling: "", sleep: "", water: "" });
  };

  return (
    <section className="wellness container">
      <h1>Daily Wellness</h1>
      <form onSubmit={handleSubmit}>
        <label>Feeling (1-10)</label>
        <input
          type="number"
          name="feeling"
          value={formData.feeling}
          onChange={handleChange}
        />

        <label>Hours of Sleep</label>
        <input
          type="number"
          name="sleep"
          value={formData.sleep}
          onChange={handleChange}
        />

        <label>Water Intake (oz)</label>
        <input
          type="number"
          name="water"
          value={formData.water}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </section>
  );
}
