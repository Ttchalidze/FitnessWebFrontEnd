import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const onPasswordchange = (event) => {
    let value = event.target.value;
    setPassword(value);
  };
  const onLoginEvent = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }
    const result = await login({ email, password });
    if (result.error) {
      setError(result.error.message);
    } else {
      console.log("Login Successful!", result);
    }
  };
  return (
    <div className="container">
      <h1>Log in to your account</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onLoginEvent}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={onEmailChange} value={email} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={onPasswordchange}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};
