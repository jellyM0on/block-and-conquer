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
    "Chemistry",
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
    console.log("Selected Interests:", selectedInterests); // Remove this once the URL is ready
    navigate("/avatar"); // Remove this once the URL is ready
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
      navigate("/avatar");
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

      <h3 className="interest-instructions">Select Interests</h3>
      <div className="topic-list">
        {topics.map((interest) => (
          <button
            key={interest}
            className={`interest-item ${
              selectedInterests.includes(interest) ? "selected" : ""
            }`}
            onClick={() => handleToggleInterest(interest)}
          >
            {interest}
          </button>
        ))}
      </div>

      <div className="save-btn-container">
        <button
          className="save-interest-btn"
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}

export default Interest;
