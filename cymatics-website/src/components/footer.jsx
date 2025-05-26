import React from 'react';
import './footer.css';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-heading">
              <h3 className="footer-logo">Cymatics</h3>
            </div>
            <p className="footer-description">
              Empowering aerial innovation through cutting-edge drone technology and AI-powered solutions.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>contact@cymatics.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <div className="footer-heading">
              <h4 className="footer-title">Quick Links</h4>
            </div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <div className="footer-heading">
              <h4 className="footer-title">Services</h4>
            </div>
            <ul className="footer-links">
              <li><a href="#services">Aerial Photography</a></li>
              <li><a href="#services">3D Mapping</a></li>
              <li><a href="#services">Infrastructure Inspection</a></li>
              <li><a href="#services">Land Surveying</a></li>
              <li><a href="#services">Data Analytics</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-col">
            <div className="footer-heading">
              <h4 className="footer-title">Connect With Us</h4>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
            <div className="newsletter">
              <h5>Subscribe to our newsletter</h5>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Cymatics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;