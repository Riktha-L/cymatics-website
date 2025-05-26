// Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cymatics logo-03.png';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    let element = null;
    
    // Map navbar items to actual section classes/elements
    const sectionMap = {
      'home': '.hero', // Hero section
      'about': '.about-section', // About section
      'services': 'services', // Services section (will add ID)
      'projects': 'technology', // Technology section (treating as projects)
      'contact': 'footer' // Footer section
    };
    
    const targetSelector = sectionMap[sectionId];
    
    if (targetSelector) {
      if (targetSelector.startsWith('.')) {
        element = document.querySelector(targetSelector);
      } else {
        element = document.getElementById(targetSelector);
      }
    }
    
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback for home
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActive('home');
        return;
      }

      // Define sections with their selectors and corresponding nav items
      const sections = [
        { selector: '.hero', navItem: 'home' },
        { selector: '.about-section', navItem: 'about' },
        { selector: '#services', navItem: 'services' },
        { selector: '#technology', navItem: 'projects' },
        { selector: '.footer', navItem: 'contact' }
      ];

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i].selector);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i].navItem);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setActive(item);
    setIsMenuOpen(false);
    scrollToSection(item);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home" onClick={(e) => handleNavClick('home', e)}>
            <img src={logo} alt="Cymatics Logo" className="logo-img" />
          </a>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'services', label: 'Services' },
            { key: 'projects', label: 'Technology' }, // Changed to Technology to match your content
            { key: 'contact', label: 'Contact' }
          ].map((item) => (
            <li key={item.key}>
              <a 
                href={`#${item.key}`} 
                className={active === item.key ? 'active' : ''}
                onClick={(e) => handleNavClick(item.key, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;