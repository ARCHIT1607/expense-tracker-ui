import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();

  // React States
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
      await Axios.post(
        window.API_URL + "/login?userName=" + username + "&password=" + password
      )
        .then((response) => {
          console.log(response.data);
          console.log("inside success")
          localStorage.setItem("username", username);
          console.log("username in login " + username);
          navigate("/dashboard");
        })
        .catch((error) => {
          if (error.response) {
            console.log("inside error")
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            // alert(error.response.data);
            toast(error.response.data);
          } else {
            console.log("Error", error.message);
          }
        });

  };

  useEffect(() => {
    console.log(localStorage.getItem("username"));
    if (localStorage.getItem("username") != null) {
      navigate("/dashboard");
    }
  }, []);

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
        <ToastContainer/>
      </div>
    </div>
  );
}

export default Login;
