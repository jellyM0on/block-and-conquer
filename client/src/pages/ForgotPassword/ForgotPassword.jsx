import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import close from "../../assets/close-btn-icon.svg";

function ForgotPassword() {
  // States
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Check if email exists
  const checkEmailExists = async (email) => {
    // To be modified - check database -- fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        const emailExists = email === "user@example.com";
        resolve(emailExists);
      }, 1000);
    });
  };

  // Email confirmation and messages
  const handleEmailConfirmation = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }

    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setMessage("A password reset link has been sent to your email.");
        setIsError(false);
      } else {
        setMessage("This email is not registered in our system.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setIsError(true);
    }
  };

  // Navigation
  const navigate = useNavigate();

  return (
    <div className="forgot-password-container">
      <div className="fp-header">
        <img
          src={close}
          alt="close"
          className="close-btn-fp"
          onClick={() => navigate("/login")}
        />
        <h2 className="fp-heading">Reset Password</h2>
      </div>

      <form onSubmit={handleEmailConfirmation} className="email-fp">
        <p className="label">Enter your email account:</p>
        <input
          type="email"
          className="email-input-fp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit" className="confirm-email-btn">
          Confirm Email
        </button>
      </form>

      {message && (
        <p className={isError ? "error-message" : "success-message"}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ForgotPassword;
