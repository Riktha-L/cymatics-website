import React from 'react';

const Contact = () => {
  const styles = {
    section: {
      background: '#0d0d0d',
      color: '#fff',
      padding: '80px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px',
    },
    left: {
      flex: '1',
      minWidth: '300px',
    },
    right: {
      flex: '1',
      minWidth: '300px',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '30px',
    },
    info: {
      fontSize: '1.1rem',
      color: '#ccc',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    input: {
      padding: '15px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #333',
      backgroundColor: '#1a1a1a',
      color: '#fff',
    },
    textarea: {
      padding: '15px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #333',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      minHeight: '120px',
    },
    button: {
      padding: '15px',
      backgroundColor: '#00bcd4',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#000',
      cursor: 'pointer',
      fontWeight: 600,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.title}>Get in Touch</h2>
        <p style={styles.info}>📧 Email: hello@cymatics.com</p>
        <p style={styles.info}>📞 Phone: +91 98765 43210</p>
        <p style={styles.info}>
          We’d love to hear from you — whether it’s a business inquiry, partnership, or support.
        </p>
      </div>
      <div style={styles.right}>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
