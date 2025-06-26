import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailChange = (event) => {
    let val = event.target.value;
    setEmail(val);
  };
  const onPasswordChange = (event) => {
    let val = event.target.value;
    setPassword(val);
  };
  const onLoginEvent = async () => {
    const results = await login({ email, password });
    if (results) {
      navigate("/");
    }
  };
  return (
    <div className="">
      <h1 className="">Log in to your account</h1>
      <div>
        <label htmlFor="email" className="LoginEmail">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="inputEmail"
          onChange={onEmailChange}
          value={email}
        />
        <Link to="/register">Need an account? Register here.</Link>
        <label htmlFor="password" className="LoginPassword">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="inputPAssword"
          onChange={onPasswordChange}
          value={password}
        />
        <button
          onClick={onLoginEvent}
          className="LoginButton
        "
        >
          Login
        </button>
        <p className="RegisterRedirect">
          Need an account?
          <Link to="/register">Need an account? Register here.</Link>
        </p>
      </div>
    </div>
  );
}
