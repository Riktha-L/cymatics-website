// Updated Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  
  return (
    <nav className="navbar">
      <div className="logo">
        <a>
          <img src="cymatics-website\src\assets\logo.png" alt="Cymatics Logo" />
        </a>
      </div>
      <ul className="nav-links">
        {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item}`} 
              className={active === item ? 'active' : ''}
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-cta">Get a Quote</button>
    </nav>
  );
}

export default Navbar;