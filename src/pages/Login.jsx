// src/pages/Login.jsx
import React from "react";
import "../styles/login.css";

export default function Login() {
  return (
    <section className="login container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="#">Register here</a>
      </p>
    </section>
  );
}
