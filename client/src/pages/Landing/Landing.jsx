import React from 'react'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeaturesIntro from '../../components/FeaturesIntro/FeaturesIntro'
import FeatureDetails from '../../components/FeatureDetails/FeatureDetails'

function Landing() {
  return (
    <div className='landing-content'>
        <Navbar/>
        <HeroSection/>
        <FeaturesIntro/>
        <FeatureDetails/>
    </div>
  )
}

export default Landing