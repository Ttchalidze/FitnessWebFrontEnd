import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./login.css";
import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onLoginEvent = async (e) => {
    e.preventDefault();
    const results = await login({ email, password });
    if (results) {
      navigate("/");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Log in to your account</h1>
        <form className="login-form" onSubmit={onLoginEvent}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="inputEmail"
            onChange={onEmailChange}
            value={email}
            autoComplete="username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="inputPassword"
            onChange={onPasswordChange}
            value={password}
            autoComplete="current-password"
            required
          />

          <button type="submit" className="LoginButton">
            Login
          </button>
        </form>
        <p className="RegisterRedirect">
          Need an account?
          <Link to="/register"> Register here.</Link>
        </p>
      </div>
    </div>
  );
}
