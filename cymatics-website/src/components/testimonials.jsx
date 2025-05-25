import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Project Manager, SkyBuild',
    text: 'Cymatics transformed our site monitoring. Their drone imaging is crystal-clear and incredibly helpful.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Priya Sharma',
    role: 'Agritech Lead, GreenFields',
    text: 'Their AI-powered drone analysis helped us boost our yield. Absolutely game-changing technology!',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Alex Kim',
    role: 'Security Head, SecureOps',
    text: 'Reliable, real-time surveillance with zero downtime. Highly recommend Cymatics for aerial security.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const Testimonials = () => {
  const styles = {
    section: {
      background: '#111',
      color: '#fff',
      padding: '80px 20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '50px',
    },
    scroll: {
      display: 'flex',
      overflowX: 'auto',
      gap: '30px',
      padding: '10px 0',
      justifyContent: 'center',
      scrollbarWidth: 'none',
    },
    card: {
      background: '#1a1a1a',
      borderRadius: '16px',
      padding: '30px 20px',
      minWidth: '280px',
      maxWidth: '320px',
      flex: '0 0 auto',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      textAlign: 'left',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '15px',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    role: {
      fontSize: '0.9rem',
      color: '#aaa',
      marginBottom: '15px',
    },
    text: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#ccc',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Clients Say</h2>
      <div style={styles.scroll}>
        {testimonials.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.avatar} alt={item.name} style={styles.avatar} />
            <div style={styles.name}>{item.name}</div>
            <div style={styles.role}>{item.role}</div>
            <div style={styles.text}>“{item.text}”</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
