import React from "react";
import "./Login.css";
import { btnIcons, logoIcons } from "../assets/assets";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  {
    /*functionalities/events: setting email and password, showing password(toggle), handle login + Google */
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="header">
          <div className="close-btn">
            <img src={btnIcons.closeBtn} alt="close" />
          </div>

          <h2 className="login-title">Log In</h2>

          <div className="signup-btn">
            <button className="signup">Sign Up</button>
          </div>
        </div>

        <div className="google-login">
          <button className="google-btn">
            <img src={logoIcons.googleLogo} alt="Google" />
            Log in with Google
          </button>
        </div>

        <div className="divider">
          <span className="or-divider">OR</span>
        </div>

        {/* Email, Password, Login Button, Forgot Password, TNC*/}

        <form action="#" className="login-form">
          <div className="input-wrapper email-wrapper">
            <input
              type="email"
              placeholder="EMAIL"
              className="input-field"
              required
            />
          </div>

          <div className="input-wrapper password-wrapper">
            <input
              type="password"
              placeholder="PASSWORD"
              className="input-field"
              required
            />
            <p>
              <FaRegEye className="eye-icon" />
            </p>
          </div>

          <div className="login-btn">
            <button className="login">LOG IN</button>
          </div>
        </form>

        <a href="#" className="forgot-pass">
          Forgot password?
        </a>

        <p className="tnc">
          By continuing, you acknowledge that you have read and understood, and
          agree to Block&Conquer’s Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Login;
