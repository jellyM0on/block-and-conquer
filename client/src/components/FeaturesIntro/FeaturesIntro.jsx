import React from 'react'
import './FeaturesIntro.css'
import dashboard from '../../assets/dashboard.png'
import cards from '../../assets/cards-icon.png'
import timer from '../../assets/timer-icon.png'
import points from '../../assets/points-icon.png'

const FeaturesIntro = () => {
  return (
    <div className='intro-container'>
        <div className="intro-header">
            <div className="intro-label">Features</div>
            <h1>Unlock Smarter Learning and Seamless Productivity</h1>
        </div>
        <div className="intro-card-container">
            <div className="features-desc">
                <div className="flashcards-desc">
                    <img src={cards} alt="Cards" />
                    <p>Create custom flashcards and track difficulty ratings for targeted study sessions.</p>
                </div>
                <div className="pomodoro-desc">
                    <img src={timer} alt="Timer" />
                    <p>Utilize task tracking with Pomodoro timers for deep work and time management.</p>
                </div>
                <div className="gamify-desc">
                    <img src={points} alt="Points" />
                    <p>Earn points, level up, and see your achievements through interactive elements and streaks.</p>
                </div>
            </div>
            <div className="dashboard-bg">
                <img src={dashboard} alt="Dashboard" className='dashboard-pic'/>
            </div>
        </div>
    </div>
  )
}

export default FeaturesIntro