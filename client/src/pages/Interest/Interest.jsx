import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Interest.css";
import back from "../../assets/back-btn-icon.svg";

function Interest() {
  // State
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Navigation
  const navigate = useNavigate();

  // List of topics
  const topics = [
    "Computer Science",
    "Mathematics",
    "Biology",
    "Anatomy",
    "Literature",
    "History",
    "Geography",
    "Home Economics",
    "Ethics",
    "Physics",
    "Business Studies",
  ];

  // Handle toggling interests
  const handleToggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Handle interest submission
  const handleSubmit = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interests: selectedInterests }),
      });

      if (!response.ok) {
        throw new Error("Failed to save interests");
      }

      const result = await response.json();
      console.log("Interests saved:", result);
      navigate("/next-page");
    } catch (err) {
      console.error("Error saving interests:", err.message);
    }
  };

  return (
    <div className="interest-container">
      <div className="header-interest">
        {" "}
        <img
          src={back}
          alt="go back"
          className="back-btn"
          onClick={() => navigate("/signup")}
        />
        <h2 className="interest-heading">Set Up Your Profile</h2>
      </div>

      <div className="topic-list">
        <h3 className="interest-instructions">Select Interests</h3>
        <div className="topic-grid-list"></div>
      </div>
    </div>
  );
}

export default Interest;
