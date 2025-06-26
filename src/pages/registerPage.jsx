import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";
import "../styles/register.css";

const Register = () => {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onFirstnameChange = (event) => setFirstName(event.target.value);
  const onLastNameChange = (event) => setLastName(event.target.value);

  const onRegister = async (e) => {
    e.preventDefault();
    await register({ firstName, lastName, email, password });
  };

  return (
    <div className="register-bg">
      <div className="register-container">
        <h1>Register for an account</h1>
        <form className="register-form" onSubmit={onRegister}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={onFirstnameChange}
            required
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            onChange={onLastNameChange}
            required
          />
          <label htmlFor="registerEmail">Email</label>
          <input
            type="email"
            id="registerEmail"
            onChange={onEmailChange}
            required
          />
          <label htmlFor="registerPassword">Password</label>
          <input
            type="password"
            id="registerPassword"
            onChange={onPasswordChange}
            required
          />
          <button type="submit" className="registerButton">
            Register
          </button>
        </form>
        <p className="registerP">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
