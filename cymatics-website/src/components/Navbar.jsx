import React from 'react';
import './Navbar.css'; // create this CSS file separately

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Cymatics</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="Careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
