import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <form>
        <div className="container">
          <h2>Login</h2>
          <div className="row">
            <div className="col-lg-12">
              <input
                type="text"
                name="username"
                value=""
                placeholder="username"
                className="inputText"
              />
            </div>
            <div className="col-lg-12">
              <input
                type="password"
                name="password"
                value=""
                placeholder="password"
                className="inputPass"
              />
            </div>
            <div className="col-lg-12">
              <button type="submit" className="btn btn-info">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
