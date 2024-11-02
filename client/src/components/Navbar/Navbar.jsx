import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Logo" className='logo' />
        <ul className='navbar-ul'>
            <li><span className="circle-1"></span>About Us</li>
            <li><span className="circle-2"></span>Features</li>
            <li><span className="circle-3"></span>Testimonials</li>
        </ul>
        <div className='nav-btn'>
            <button className='login-btn'>Log In</button>
            <button className='signup-btn'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar