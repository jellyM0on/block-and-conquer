import React from 'react'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeaturesIntro from '../../components/FeaturesIntro/FeaturesIntro'

function Landing() {
  return (
    <div className='landing-content'>
        <Navbar/>
        <HeroSection/>
        <FeaturesIntro/>
    </div>
  )
}

export default Landing