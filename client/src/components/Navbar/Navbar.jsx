import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
  }

  const scrolltoTestimonials = () => {
    const element = document.getElementById("testimonials");
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <nav>
        <img src={logo} alt="Logo" className='logo' />
        <ul className='navbar-ul'>
            <li><span className="circle-1"></span>About Us</li>
            <li onClick={scrollToFeatures}><span className="circle-2"></span>Features</li>
            <li onClick={scrolltoTestimonials}><span className="circle-3"></span>Testimonials</li>
        </ul>
        <div className='nav-btn'>
            <button className='login-btn'>Log In</button>
            <button className='signup-btn'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar