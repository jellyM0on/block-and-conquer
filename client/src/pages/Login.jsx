import React, { useState } from "react";
import "./Login.css";
import { btnIcons, logoIcons } from "../assets/assets";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // for handling email and password
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  // for logging in using Google

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="header">
          <div className="close-btn-container">
            <img src={btnIcons.closeBtn} alt="close" className="close-btn" />
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

        <form action="#" className="login-form" onSubmit={handleLogin}>
          <div className="input-wrapper email-wrapper">
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="PASSWORD"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p onClick={togglePasswordVisibility} className="eye-icon">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>

          <div className="login-btn">
            <button type="submit" className="login">
              LOG IN
            </button>
          </div>
        </form>

        <a href="#" className="forgot-pass">
          Forgot password?
        </a>

        <div className="tnc-container">
          <p className="tnc">
            By continuing, you acknowledge that you have read and understood,
            and agree to Block&Conquer’s{" "}
            <a href="#" className="tnc-link">
              Terms of Service and Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
