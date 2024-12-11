import React from "react";
import "./ForgotPassword.css";
import close from "../../assets/close-btn-icon.svg";

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="fp-header">
        <h2 className="fp-heading">Reset Password</h2>
      </div>

      <form action="" className="email-fp">
        <p className="label">Enter your email account:</p>
        <input type="email" className="email-input-fp" />
        <button className="confirm-email-btn">Confirm Email</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
