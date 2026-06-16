import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-logo">
          <div className="brand-logo">B</div>
          <div className="brand-name" style={{ color: 'white' }}>Brooklyn</div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-copyright">
          Copyright &copy; 2023 Pikox.
        </div>

      </div>
    </footer>
  );
}
