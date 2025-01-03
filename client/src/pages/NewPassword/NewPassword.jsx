import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./NewPassword.css";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 12) {
      return "Password must be at least 12 characters long.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  // Submission of the new password - add functionality for changing it in the database
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validatePassword();
    if (validationError) {
      setErrorMessage(validationError);
    } else {
      setErrorMessage("");
      console.log("Password successfully updated!");
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );

  return (
    <div className="new-password-container">
      <div className="np-header">
        <h2 className="np-heading">Create New Password</h2>
      </div>

      <div className="password-guidelines">
        <ul>
          <li className="pw-guidelines">
            Password must be at least 12 characters
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="np-fp">
        <p className="label">Enter your new password:</p>
        <div className="input-with-icon">
          <input
            type={showPassword ? "text" : "password"}
            className="np-input-fp"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span
            onClick={togglePasswordVisibility}
            className="eye-icon-enter-pw"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <p className="label">Confirm your new password:</p>
        <div className="input-with-icon">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="np-input-confirm-fp"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="eye-icon-confirm-pw"
          >
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <button type="submit" className="confirm-pass-btn">
          Confirm Password
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default NewPassword;
