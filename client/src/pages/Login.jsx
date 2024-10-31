import React from "react";
import "./Login.css";
import { btnIcons } from "../assets/assets";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="close-btn">
          <img src={btnIcons.closeBtn} alt="close" />
        </div>

        <h2>Log In</h2>

        <div className="signup-btn">
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
