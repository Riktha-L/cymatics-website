// src/components/Hero.jsx
import React from 'react';
import logo from '../assets/logo.png'; 
const Hero = () => {
  return (
    <section className="hero" style={styles.hero}>
      <img src={logo} alt="Cymatics Logo" style={styles.logo} />
      <h1 style={styles.title}>Welcome to Cymatics</h1>
      <p style={styles.subtitle}>Aerial Solutions Powered by Innovation</p>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '60px 20px',
  },
  logo: {
    width: '200px',
    maxWidth: '80%',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#ccc',
  },
};

export default Hero;
