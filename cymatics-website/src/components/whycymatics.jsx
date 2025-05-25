// src/components/WhyCymatics.jsx
import React from 'react';
import { FaUserTie, FaMicrochip, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserTie size={32} color="#00BFFF" />,
    title: 'Certified Professionals',
    description: 'Our UAV pilots are licensed and trained to handle any aerial situation with expertise.',
  },
  {
    icon: <FaMicrochip size={32} color="#00BFFF" />,
    title: 'Advanced Tech Stack',
    description: 'We integrate AI, 4K video, thermal imaging, and real-time tracking into every mission.',
  },
  {
    icon: <FaCheckCircle size={32} color="#00BFFF" />,
    title: '1000+ Missions Completed',
    description: 'We’ve served real estate, agriculture, events, and government sectors with excellence.',
  },
];

const WhyCymatics = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why Choose Cymatics?</h2>
      <div style={styles.timeline}>
        {features.map((feature, index) => (
          <div key={index} style={styles.featureBlock}>
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.title}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
            {index !== features.length - 1 && <div style={styles.line} />}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '60px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  featureBlock: {
    marginBottom: '40px',
    position: 'relative',
    paddingBottom: '40px',
    width: '80%',
    maxWidth: '600px',
  },
  icon: {
    backgroundColor: '#111',
    border: '2px solid #00BFFF',
    borderRadius: '50%',
    padding: '12px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  description: {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  line: {
    height: '50px',
    width: '2px',
    backgroundColor: '#444',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

export default WhyCymatics;
