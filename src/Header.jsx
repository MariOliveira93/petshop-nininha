import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="sephora-header">
      <div className="header-content">
        <h1 className="header-logo">PETSHOP NININHA 🐾</h1>
        
        <nav className="header-nav">
          <ul className="nav-links">
            <li><a href="#creche">CRECHE</a></li>
            <li><a href="#hotel">HOTELZINHO</a></li>
            <li><a href="#banho">BANHO & TOSA</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;