import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        
        {/* Left Side */}
        <div className="contact-info">
          <h2 className="contact-title">Let's discuss your Project</h2>
          <p className="contact-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          
          <div className="contact-details">
            <div className="contact-detail-item active">
              <div className="detail-icon"><img src={new URL('../assets/icons/location-active.svg', import.meta.url).href} alt="Facebook" /></div>
              <div className="detail-text">
                <span className="detail-label">Address:</span>
                <span className="detail-value">Kigali, Rwanda</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="detail-icon"><img src={new URL('../assets/icons/mail.svg', import.meta.url).href} alt="Facebook" /></div>
              <div className="detail-text">
                <span className="detail-label">My Email:</span>
                <span className="detail-value">hello@prnc.dev</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="detail-icon"><img src={new URL('../assets/icons/phone.svg', import.meta.url).href} alt="Facebook" /></div>
              <div className="detail-text">
                <span className="detail-label">Call Me Now:</span>
                <span className="detail-value">+250 786 263 874</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/princengiru" target="_blank" rel="noopener noreferrer" className="social-icon active"><img src={new URL('../assets/icons/github-active.svg', import.meta.url).href} alt="GitHub" style={{width: '24px', height: '24px'}} /></a>
            <a href="https://wa.me/250786263874" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('../assets/icons/whatsapp.svg', import.meta.url).href} alt="WhatsApp" /></a>
            <a href="https://www.instagram.com/prince_hymn/" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('../assets/icons/instagram.svg', import.meta.url).href} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/prince-ngiruwonsanga-285325323/" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={new URL('../assets/icons/linkedin.svg', import.meta.url).href} alt="LinkedIn" /></a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-container">
          <p className="contact-subtitle" style={{marginBottom: '2rem'}}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <form className="contact-form">
            <div className="form-group active">
              <label>Name*</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" className="form-input" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Budget*</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group">
                <label>Subject*</label>
                <input type="text" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label>Message*</label>
              <input type="text" className="form-input" />
            </div>
            <button type="button" className="btn btn-primary submit-btn" style={{display: 'flex', alignItems: 'center', gap: '0.5rem',fontSize: '1rem', fontWeight: '500', cursor: 'pointer', border: 'none',}}>Submit <img src={new URL('../assets/icons/send.svg', import.meta.url).href} alt="Send" style={{width: '16px', height: '16px'}} /></button>
          </form>
        </div>

      </div>
    </section>
  );
}
