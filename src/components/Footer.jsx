import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-header">
          <div className="footer-logo">
            <div className="brand-logo-text"><span className="brace">{'{'}</span>prnc<span className="brace">{'}'}</span></div>
          </div>
          <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
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

        <div className="footer-divider"></div>

        <div className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} Prince.
        </div>

      </div>
    </footer>
  );
}