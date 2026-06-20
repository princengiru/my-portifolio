import React from 'react';
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

export default function AppPortfolio() {
  return (
    <div className="portfolio-container">
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-logo-text"><span className="brace">{'{'}</span>prnc<span className="brace">{'}'}</span></div>
        </div>
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <button className="btn btn-primary">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <br /> Prince NGIRUWONSANGA.
          </h1>
          <p className="hero-subtitle">
            I'm a <strong>Senior Web Developer</strong> and <strong>Brand Designer</strong> based in Kigali, Rwanda. 
            I strive to build immersive and beautiful web and mobile applications through 
            carefully crafted code and user-centric design.
          </p>
          
          <button className="btn btn-primary">Say Hello!</button>
          
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">2 Y.</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5+</div>
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
              <a href="https://github.com/princengiru" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('./assets/icons/github.svg', import.meta.url).href} alt="GitHub" /></a>
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
              <button className="btn btn-primary">My Projects</button>
              <button className="btn btn-outline">
                 <img src={new URL('./assets/icons/download.svg', import.meta.url).href} alt="download" style={{ width: '15px'}} className='w-20'/>
                Download CV
              </button>
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
      <CallToAction />

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