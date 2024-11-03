import React from 'react'
import './FeatureDetails.css'
import block from '../../assets/block.png'
import community from '../../assets/community.png'
import customize from '../../assets/customize.png'
import pomodoro from '../../assets/pomodoro.png'

const FeatureDetails = () => {
  return (
    <div className='features-container'>
        <div className="features-header">
            <div className="features-label">Features</div>
            <h1>Keeps everything in one place</h1>
            <p className='features-subtitle'>Forget about complex productivity tools</p>
        </div>
        <div className="features-grid">
            <div className="block-card">
                <img src={block} alt="Block" className='block-img'/>
                <div className="card-text">
                    <h2>Smart Site Blocking</h2>
                    <p>Block distractions, so you can stay focused and in control of your study sessions</p>
                </div>  
            </div>
            <div className="community-card">
                <img src={community} alt="Community" className='community-img'/>
                <div className="card-text">
                    <h2>Community Flashcards</h2>
                    <p>Access and contribute to a vast library of communityt flashcards, making learning a collaborative and engaging experience</p>
                </div> 
            </div>
            <div className="customize-card">
                <img src={customize} alt="Customize" className='customize-img'/>
                <div className="card-text">
                    <h2>Personalized Avatars</h2>
                    <p>Express yourself and make your study experience unique by customizing your avatar to reflect your personality.</p>
                </div>  
            </div>
            <div className="pomodoro-card">
                <img src={pomodoro} alt="Pomodoro"className='pomodoro-img'/>
                <div className="card-text">
                    <h2>Pomodoro Productivity</h2>
                    <p>Enhance your productivity using the built-in Pomodoro timer, helping you work in focused intervals for maximum efficiency</p>
                </div>
            </div>
        </div>
        <div className="features-footer">and more features soon!</div>
    </div>
  )
}

export default FeatureDetails