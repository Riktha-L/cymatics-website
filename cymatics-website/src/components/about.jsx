// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Cymatics</h2>
        <p style={styles.tagline}>Revolutionizing Aerial Intelligence</p>
        <div style={styles.contentBox}>
          <p style={styles.text}>
            Cymatics is a forward-thinking aerial solutions company utilizing drone technology for inspection, cinematography, and data intelligence. We blend technology with creativity to offer unmatched services to diverse industries, from film to infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#0d0d0d',
    color: '#f0f0f0',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ffffff',
  },
  tagline: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#888',
    letterSpacing: '1px',
  },
  contentBox: {
    background: '#1a1a1a',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#ddd',
  },
};

export default About;
