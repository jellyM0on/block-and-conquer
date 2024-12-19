import React from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.css";
import back from "../../assets/back-btn-icon.svg";

function Avatar() {
  // Navigation
  const navigate = useNavigate();
  return (
    <div className="avatar-container">
      <div className="header-avatar">
        <img
          src={back}
          alt="go back"
          className="back-btn"
          onClick={() => navigate("/interest")}
        />
        <h2 className="avatar-heading">Set Up Your Profile</h2>
      </div>
    </div>
  );
}

export default Avatar;
