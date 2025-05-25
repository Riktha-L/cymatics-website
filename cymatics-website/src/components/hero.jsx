
import React from 'react';
import './hero.css';
import droneBg from '../assets/logo.png'; // Add this image

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${droneBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">AERIAL INTELLIGENCE REDEFINED</h1>
          <p className="hero-subtitle">Precision drone solutions for industries that demand excellence</p>
          <div className="hero-cta">
            <button className="hero-btn">Explore Services</button>
            <button className="hero-btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;