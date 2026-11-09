import React, { useState, useEffect } from 'react';
import './App.css';
import WorkProcess from './components/WorkProcess';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Blog from './components/Blog';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import prince from "./assets/hero-image.jpeg"
import aboutImg from "./assets/about-image.jpeg"
import cvPdf from "./assets/docs/Portfolio CV.pdf";
import exitCornerIcon from "./assets/icons/exit-right-corner.svg";

export default function AppPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedGreeting, setTypedGreeting] = useState("");
  const [typedName, setTypedName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cvBlobUrl, setCvBlobUrl] = useState("");

  // Create an encrypted-looking blob URL so actual file path/directory is not exposed in the browser URL
  useEffect(() => {
    let url = "";
    fetch(cvPdf)
      .then((res) => res.blob())
      .then((blob) => {
        const pdfBlob = new Blob([blob], { type: "application/pdf" });
        url = URL.createObjectURL(pdfBlob);
        setCvBlobUrl(url);
      })
      .catch(() => {
        setCvBlobUrl(cvPdf);
      });

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  const handleViewCv = async (e) => {
    if (cvBlobUrl) return;
    e.preventDefault();
    const newTab = window.open("about:blank", "_blank");
    try {
      const res = await fetch(cvPdf);
      const blob = await res.blob();
      const pdfBlob = new Blob([blob], { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);
      setCvBlobUrl(url);
      if (newTab) newTab.location.href = url;
    } catch {
      if (newTab) newTab.location.href = cvPdf;
    }
  };

  // Typing effect starting from "Hello, I'm" down to the name
  useEffect(() => {
    const greetingText = "Hello, I'm";
    const nameText = "Prince NGIRUWONSANGA.";
    let timeoutId;
    let intervalId;
    let cursorTimeoutId;
    let i = 0;
    let j = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (i < greetingText.length) {
          i++;
          setTypedGreeting(greetingText.slice(0, i));
        } else if (j < nameText.length) {
          j++;
          setTypedName(nameText.slice(0, j));
        } else {
          clearInterval(intervalId);
          // Let cursor blink for ~2.5s after finishing, then fade it out
          cursorTimeoutId = setTimeout(() => {
            setCursorVisible(false);
          }, 2500);
        }
      }, 65);
    }, 250);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (cursorTimeoutId) clearTimeout(cursorTimeoutId);
    };
  }, []);

  // Close mobile menu if window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToContact = () => {
    closeMenu();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    closeMenu();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-logo-text"><span className="brace">{'{'}</span>prnc<span className="brace">{'}'}</span></div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="nav-backdrop" 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        
        <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <button className="btn btn-primary nav-contact-btn" onClick={scrollToContact}>Contact</button>
        </div>

        <button 
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            {typedGreeting}
            {typedGreeting.length >= "Hello, I'm".length && <br />}
            <span className="hero-typed-name">{typedName}</span>
            <span className={`typing-cursor ${!cursorVisible ? 'fade-out' : ''}`}>|</span>
          </h1>
          <p className="hero-subtitle">
            I'm a <strong>Senior Web Developer</strong> and <strong>Brand Designer</strong> based in Kigali, Rwanda. 
            I strive to build immersive and beautiful web and mobile applications through 
            carefully crafted code and user-centric design.
          </p>

          <button className="btn btn-primary hero-btn" onClick={scrollToContact}>Say Hello!</button>
          
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">5+ Y.</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src={prince}
            alt="Prince NGIRUWONSANGA" 
            className="hero-image"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-card">
          <div className="about-image-container">
            <img 
              src={aboutImg}
              alt="Prince NGIRUWONSANGA" 
              className="about-image"
            />
            {/* Floating Social Bar */}
            <div className="social-bar">
              <a href="https://github.com/princengiru" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('./assets/icons/github.svg', import.meta.url).href} alt="GitHub" style={{width: '24px', height: '24px'}}/></a>
              <a href="https://wa.me/250786263874" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('./assets/icons/whatsapp.svg', import.meta.url).href} alt="WhatsApp" /></a>
              <a href="https://www.instagram.com/prince_hymn/" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('./assets/icons/instagram.svg', import.meta.url).href} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/in/prince-ngiruwonsanga-285325323/" target="_blank" rel="noopener noreferrer" className="social-icon active"><img src={new URL('./assets/icons/linkedin-active.svg', import.meta.url).href} alt="LinkedIn" /></a>
            </div>
          </div>

          <div className="about-content">
            <h2 className="about-title">
              I am a Professional <br /> Full-Stack Developer
            </h2>
            <p className="about-text">
              I build modern websites, mobile apps, and brand identities that bridge the gap between clean code and intuitive design.
            </p>
            <p className="about-text">
              My focus is delivering scalable, end-to-end products. I craft responsive front-ends (HTML5, React, Next.js, Tailwind), robust back-ends (Node.js, Express, Python, PHP), seamless mobile apps (React Native, Expo), and reliable databases (MySQL, MongoDB).
            </p>
            
            <div className="about-actions">
              <button className="btn btn-primary" onClick={scrollToPortfolio} >My Projects</button>
              <a 
                href={cvBlobUrl || "#"} 
                onClick={handleViewCv}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <img 
                  src={exitCornerIcon} 
                  alt="" 
                  style={{ width: '16px', height: '16px' }}
                />
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="process">
        <WorkProcess />
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <Portfolio />
      </section>

      {/* Call To Action Section */}
      <CallToAction onContactClick={scrollToContact} />

      {/* Blog Section */}
      <Blog />

      {/* Services Section */}
      <Services />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}