import { useState } from "react";
import { Link } from "react-router";

import { useAuth } from "./AuthContext";

//A form that allows users to register for a new account
export const RegisterPage = () => {
  const { register } = useAuth();
  const [fistname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    let val = event.target.value;
    setEmail(val);
  };
  const onPasswordChange = (event) => {
    let val = event.target.value;
    setPassword(val);
  };
  const onFirstnameChange = (event) => {
    let val = event.target.value;
    setFirstName(val);
  };
  const onLastNameChange = (event) => {
    let val = event.target.value;
    setLastName(val);
  };
  const onRegister = async () => {
    const results = await register({ fistname, lastname, email, password });
    console.log(results);
  };
  return (
    <div className="registerDiv">
      <h1 className="registerh1">Register for an account</h1>
      <div className="registerDiv2">
        <label htmlFor="firstName">First Name</label>
        <input type="string" id="firstName" onChange={onFirstnameChange} />
        <label htmlFor="lastName">Last name </label>
        <input type="string" id="lastName" onChange={onLastNameChange} />
        <label htmlFor="registerEmail">Email</label>
        <input type="email" id="registerEmail" onChange={onEmailChange} />
        <label htmlFor="registerPassword">Password</label>
        <input
          type="password"
          id="registerPassword"
          onChange={onPasswordChange}
        />
        <button onClick={onRegister} className="registerButton">
          <a href="/home" className="cta-button"></a>
        </button>
      </div>
      <p className="registerP">
        Already have an account?
        <Link to="login"></Link>
      </p>
    </div>
  );
};
