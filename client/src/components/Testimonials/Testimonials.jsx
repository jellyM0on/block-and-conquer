import React from 'react';
import './Testimonials.css';
import testimonials from './TestimonialsData';
import logo from '../../assets/logo.png';

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials-container">
      <div className="testimonials-header">
        <div className="testimonials-label">Testimonials</div>
        <h1>People just like you are already</h1><br />
        <div className='second-line'>
            <h1>using <span className="block">Block&</span><span className="conquer">Conquer</span></h1>
        </div>   
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <div className="testimonials-card" key={index}>
              <p>{testimonial.text}</p>
              <div className="profile-section">
                <img src={testimonial.profilePic} alt={`${testimonial.name}'s profile`} />
                <div className="profile-text">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.tag}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Repeat testimonials for continuous looping */}
          {testimonials.map((testimonial, index) => (
            <div className="testimonials-card" key={`loop-${index}`}>
              <p>{testimonial.text}</p>
              <div className="profile-section">
                <img src={testimonial.profilePic} alt={`${testimonial.name}'s profile`} />
                <div className="profile-text">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
