import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Axios from "axios";
function Login() {
  const navigate = useNavigate();

  // React States
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const res = await Axios.post(
      window.API_URL + "/login?userName=" + username + "&password=" + password
    );
    console.log(res.data);
    if(res.data === "Success"){
      localStorage.setItem('username',username);
      console.log("username in login "+username)
      navigate("/dashboard")
    }else{
      alert("password is incorrect");
    }
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
        <span style={{ fontSize: "100%" }}>
          <Link to="/register"> Don't have an account?Register</Link>
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
        <div className="title">Login</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login;
