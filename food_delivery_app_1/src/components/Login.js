import React from "react";
// import { signInWithGoogle } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const name = res.user.displayName;
        const profilePic = res.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("profilePic", profilePic);
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="LoginDiv">
      <div className="buttonDiv" onClick={signInWithGoogle}>
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
