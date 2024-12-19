import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import close from "../../assets/close-btn-icon.svg";
import google from "../../assets/google-icon.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";

function Signup() {
  // States
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Email and password validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 12;

  // Password visibility toggle
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Open modal
  const openModal = () => setShowModal(true);

  // Navigation
  const navigate = useNavigate();

  // Handle Sign Up form submission
  const handleSignup = async (event) => {
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
          body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        if (json.success) {
          navigate("/interest"); // Navigate to the interest page
        } else {
          setErrorMessage(json.message || "Invalid credentials. Try again.");
        }
      } catch (error) {
        console.error("Error during signup:", error.message);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="header-signup">
        <img
          src={close}
          alt="close"
          className="close-btn"
          onClick={() => navigate("/landing-page")}
        />
        <h2 className="login-heading">Sign Up</h2>
        <button className="login-btn-signup" onClick={() => navigate("/login")}>
          Log In
        </button>
      </div>

      <div className="google-container-signup">
        <button className="google-btn-signup">
          <img src={google} alt="" className="google" />
          Sign up with Google
        </button>
      </div>

      <div className="divider">
        <span className="or-divider">OR</span>
      </div>

      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="input-wrapper">
            <input
              type="text"
              className="input-field"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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

          <button type="submit" className="signup-btn-signup">
            SIGN UP
          </button>
        </form>
      </div>

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

export default Signup;
