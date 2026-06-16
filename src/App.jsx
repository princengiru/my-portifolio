import React from 'react';
import './App.css';
import WorkProcess from './components/WorkProcess';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Blog from './components/Blog';
import Services from './components/Services';

export default function AppPortfolio() {
  return (
    <div className="portfolio-container">
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-logo">B</div>
          <div className="brand-name">Brooklyn</div>
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
            Hello, I'm <br /> Brooklyn Gilbert
          </h1>
          <p className="hero-subtitle">
            I'm a Freelance <strong>UI/UX Designer</strong> and <strong>Developer</strong> based in London, England. 
            I strives to build immersive and beautiful web applications through 
            carefully crafted code and user-centric design.
          </p>
          
          <button className="btn btn-primary">Say Hello!</button>
          
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">15 Y.</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">250+</div>
              <div className="stat-label">Project Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">58</div>
              <div className="stat-label">Happy Client</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Brooklyn Gilbert" 
            className="hero-image"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-card">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Brooklyn Gilbert Portrait" 
              className="about-image"
            />
            {/* Floating Social Bar */}
            <div className="social-bar">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">🏀</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon active">in</a>
              <a href="#" className="social-icon">Bē</a>
            </div>
          </div>

          <div className="about-content">
            <h2 className="about-title">
              I am Professional User <br /> Experience Designer
            </h2>
            <p className="about-text">
              I design and develop services for customers specializing creating stylish, 
              modern websites, web services and online stores. My passion is to design 
              digital user experiences.
            </p>
            <p className="about-text">
              I design and develop services for customers specializing creating stylish, 
              modern websites, web services.
            </p>
            
            <div className="about-actions">
              <button className="btn btn-primary">My Project</button>
              <button className="btn btn-outline">
                <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
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

    </div>
  );
}