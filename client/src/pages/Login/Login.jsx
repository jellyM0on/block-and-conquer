import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import close from "../../assets/close-btn-icon.svg";
import google from "../../assets/google-icon.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";

function Login() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Email and password validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 12;

  // Password visibility toggle
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Open modal
  const openModal = () => setShowModal(true);

  // Navigation
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);

    if (!validEmail && !validPassword) {
      setErrorMessage("Please enter a valid email and password. Try again.");
    } else if (!validEmail) {
      setErrorMessage("Please enter a valid email.");
    } else if (!validPassword) {
      setErrorMessage("Password must be at least 12 characters long.");
    } else {
      const url = ""; // API
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        if (json.success) {
          navigate("/"); // Navigate to Dashboard
        } else {
          setErrorMessage(json.message || "Invalid credentials. Try again.");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        setErrorMessage("An error occured. Please try again");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <img
          src={close}
          alt="close"
          className="close-btn"
          onClick={() => navigate("/landing-page")}
        />
        <h2 className="signup-heading">Log In</h2>
        <button
          className="signup-btn-login"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="google-container-login">
        <button className="google-btn-login">
          <img src={google} alt="" className="google" />
          Log in with Google
        </button>
      </div>

      <div className="divider">
        <span className="or-divider">OR</span>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-wrapper">
            <input
              type="email"
              className="input-field"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p onClick={togglePasswordVisibility} className="eye-icon">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-btn-login">
            LOG IN
          </button>
        </form>
      </div>

      <Link to="/forgot-password" className="forgot-password">
        Forgot Password?
      </Link>

      <div className="terms-container">
        <p className="terms">
          By continuing, you acknowledge that you have read and understood, and
          agree to Block&Conquer's{" "}
          <a href="#" className="terms-link" onClick={openModal}>
            Terms of Service and Privacy Policy
          </a>
        </p>

        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}

export default Login;
