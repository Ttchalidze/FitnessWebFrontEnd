// src/pages/Account.jsx
import React from "react";
import "../styles/account.css";

export default function Account() {
  return (
    <section className="account container">
      <h1>My Workouts</h1>
      <div className="workout-list">
        <div className="workout-item">
          <h3>Bench Press</h3>
          <p>3 sets of 10 reps</p>
          <button>Remove</button>
        </div>
      </div>
    </section>
  );
}
