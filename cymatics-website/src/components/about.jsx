import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About <span>Cymatics</span></h2>
          <p className="tagline">Revolutionizing Aerial Intelligence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Cymatics is a forward-thinking aerial solutions company utilizing drone technology 
              for inspection, cinematography, and data intelligence. We blend technology with 
              creativity to offer unmatched services to diverse industries, from film to infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;