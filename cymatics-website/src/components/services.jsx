// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: 'Drone Cinematography',
    description: 'Capture stunning aerial footage with cinematic precision and smooth motion for films, ads, and events.',
    icon: '🎥',
  },
  {
    title: 'Survey & Mapping',
    description: 'High-resolution aerial mapping and topographical survey for infrastructure and land planning.',
    icon: '🗺️',
  },
  {
    title: 'Inspection & Monitoring',
    description: 'Efficient inspection of towers, bridges, and hard-to-reach areas with real-time streaming.',
    icon: '🔍',
  },
  {
    title: 'Data Analytics',
    description: 'Get actionable insights from aerial data through intelligent processing and visualization tools.',
    icon: '📊',
  },
];

const Services = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.text}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#121212',
    padding: '80px 20px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '60px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 0 15px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.6',
  },
};

export default Services;
