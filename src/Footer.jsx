import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-nininha">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>PetShop Nininha 🐾</h2>
          <p>Onde o carinho encontra a qualidade.</p>
        </div>

        <div className="footer-links">
          <h3>Serviços</h3>
          <ul>
            <li>Creche</li>
            <li>Hotelzinho</li>
            <li>Banho & Tosa</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <p>📍 São Paulo, SP</p>
          <p>📞 (11) 98184-9141</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 PetShop Nininha - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;