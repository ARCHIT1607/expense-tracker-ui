import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
function Register() {

  const navigate = useNavigate();

  // React States
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const tenant = { username, password };
    const res = await Axios.post(window.API_URL + "/register", tenant);
    console.log(res.data);
    navigate("/login")
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <span style={{ fontSize: "70%" }}>
          <Link to="/login"> already have an account?Login</Link>
        </span>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Register;
