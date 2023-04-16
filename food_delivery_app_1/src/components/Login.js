import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="LoginDiv">
      <div className="buttonDiv">
        <img
          src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
          alt=""
          className="googleImg"
        />
        <p className="loginButton">Sign in with Google</p>
      </div>
    </div>
  );
}

export default Login;
