import React from 'react';
import { FaHelicopter, FaCogs, FaCamera, FaWifi, FaMapMarkedAlt } from 'react-icons/fa';

const techItems = [
  { icon: <FaHelicopter />, title: 'Autonomous Drones' },
  { icon: <FaCamera />, title: 'High-Res Imaging' },
  { icon: <FaCogs />, title: 'AI-Powered Processing' },
  { icon: <FaWifi />, title: 'Real-time Transmission' },
  { icon: <FaMapMarkedAlt />, title: 'Precision Mapping' },
];




const styles = {
  section: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: '600',
  },
  scroll: {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '10px 0',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  pill: {
    background: 'linear-gradient(145deg, #1f1f1f, #292929)',
    borderRadius: '30px',
    padding: '18px 28px',
    minWidth: '250px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  pillHover: {
    background: '#222',
    transform: 'translateY(-5px) scale(1.03)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.5)',
  },
  icon: {
    fontSize: '1.8rem',
    color: '#00bcd4',
  },
  label: {
    fontSize: '1.1rem',
    fontWeight: '500',
  },
};

const Technology = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Technology</h2>
      <div
        style={styles.scroll}
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}
      >
        {techItems.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.pill,
              ...(hoveredIndex === index ? styles.pillHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span style={styles.label}>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Technology;
