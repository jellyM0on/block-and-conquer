import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.css";
import back from "../../assets/back-btn-icon.svg";
import manAvatar from "../../assets/man-avatar.png";
import womanAvatar from "../../assets/woman-avatar.png";
import lgbtAvatar from "../../assets/lgbt-avatar.png";
import catAvatar from "../../assets/cat-avatar.png";

function Avatar() {
  // State
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Navigation
  const navigate = useNavigate();

  // List of avatars
  const avatars = [
    { id: "man-avatar", src: manAvatar, alt: "Man Avatar" },
    { id: "womman-avatar", src: womanAvatar, alt: "Woman Avatar" },
    { id: "lgbt-avatar", src: lgbtAvatar, alt: "LGBT Avatar" },
    { id: "cat-avatar", src: catAvatar, alt: "Cat Avatar" },
  ];

  // Selecting an avatar
  const handleSelectAvatar = (id) => {
    setSelectedAvatar(id);
  };

  // Handle avatar submission
  const handleAvatarClick = (id) => {
    setSelectedAvatar(id);
  };

  const handleSubmit = async () => {
    console.log("Selected Avatar:", selectedAvatar); // Remove this once the URL is ready
    navigate("/dashboard"); // Remove this once the URL is ready

    try {
      const response = await fetch(url, {
        // Put the actual URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: selectedAvatar }),
      });

      if (!response.ok) {
        throw new Error("Failed to save avatar");
      }

      const result = await response.json();
      console.log("Avatar saved:", result);

      navigate("/dashboard");
    } catch (err) {
      console.error("Error saving avatar:", err.message);
    }
  };

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

      <h3 className="avatar-instructions">Choose Your Avatar</h3>
      <div className="avatar-grid">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`avatar-card ${
              selectedAvatar === avatar.id ? "selected" : ""
            }`}
            onClick={() => handleAvatarClick(avatar.id)}
          >
            <img src={avatar.src} alt={avatar.alt} className="avatar-image" />
          </div>
        ))}
      </div>
      <div className="save-btn-container-avatar">
        <button
          className="save-avatar-btn"
          onClick={handleSubmit}
          disabled={!selectedAvatar}
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Avatar;
