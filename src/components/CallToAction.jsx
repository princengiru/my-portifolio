import React from 'react';
import forwardSlashIcon from '../assets/icons/forward-slash.svg';

export default function CallToAction({ onContactClick }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Have a project idea?<br />
          <span className="cta-title-highlight">Let's bring it to life!</span>
        </h2>
        <p className="cta-subtitle">
          Whether you need a scalable web platform, a custom mobile app, <br />
          or a complete brand identity, I am ready to help you build something exceptional.
        </p>
        <button className="btn btn-primary cta-btn" onClick={onContactClick}>
          Let's Work Together <img src={forwardSlashIcon} alt="arrow-right" />
        </button>
      </div>
    </section>
  );
}