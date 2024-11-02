import React from 'react';
import './Preview.css';
import logo from '../../assets/logo.png';

function Preview() {
  return (
    <div className="preview-container">
        <div className="preview">
            <div className="preview-text">
                <img src={logo} alt="Logo" className="preview-logo" />
                <p>Your <b>all-in-one hub</b> for learning, productivity, and connection. Boost your journey with flashcards, task management, and more!</p>
                <button>Get Started</button>
            </div>
        </div>
        
    </div>
  );
}

export default Preview;
