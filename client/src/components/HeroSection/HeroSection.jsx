import React from 'react'
import './HeroSection.css'
import logo from '../../assets/logo.png'
import preview from '../../assets/preview.png'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <div className="hero-text">
                <img src={logo} alt="Logo" className='title' />
                <h1 className='hero-desc'>Your <b className='hero-highlight'>all-in-one hub</b> for learning, productivity, and connection. Boost your journey with flashcards, task management, and more!</h1>
                <button className='hero-btn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection