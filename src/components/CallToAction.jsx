import React from 'react';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Have a project idea?<br />
          Let's bring it to life!
        </h2>
        <p className="cta-subtitle">
          Whether you need a scalable web platform, a custom mobile app, <br />
          or a complete brand identity, I am ready to help you build something exceptional.
        </p>
        <button className="btn btn-primary cta-btn">Let's Work Together &rarr;</button>
      </div>
    </section>
  );
}