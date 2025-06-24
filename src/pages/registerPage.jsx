import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
export const Register = () => {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  // all constants below are used to handle input changes when registering user
  const onFirstNameChange = (event) => {
    let value = event.target.value;
    setFirstName(value);
  };
  const onLastNameChange = (event) => {
    let value = event.target.value;
    setLastName(value);
  };

  const onEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const onPasswordChange = (event) => {
    let value = event.target.value;
    setPassword(value);
  };
  //array to create dropdown age selection
  const agePicker = Array.from({ length: 100 }, (value, i) => i + 1);

  const onRegisterEvent = async () => {
    setError("");
    if (!firstName || !lastName || !email || !password || !age) {
      setError("Fill all feilds");
      return;
    }
    const result = await register({
      firstName,
      lastName,
      email,
      password,
      age: Number(age),
    });
    console.log(result);
    if (result.error) {
      setError(result.error.message);
    } else {
      console.log("Registation Successfull");
    }
  };
  return (
    <div className="container">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onRegisterEvent}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={onFirstNameChange}
          value={firstName}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          onChange={onLastNameChange}
          value={lastName}
        />
        <label htmlFor="registerEmail">Email</label>
        <input
          type="email"
          id="registerEmail"
          onChange={onEmailChange}
          value={email}
        />
        <label htmlFor="registerPassword">Password</label>
        <input
          type="password"
          id="registerPassword"
          onChange={onPasswordChange}
          value={password}
        />
        <label htmlFor="age">Select Age</label>
        <select
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        >
          <option value="" disabled>
            --Select Age--
          </option>
          {agePicker.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};
