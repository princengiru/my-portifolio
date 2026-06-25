import React, { useState } from 'react';

export default function Contact() {
  // 1. Initialize state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle the Web3Forms submission logic
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    // Add your access key to the payload
    const payload = {
      ...formData,
      access_key: "2d51e32c-033e-478c-9a09-8ce587903e19"
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();

      if (data.success) {
        setToast({ show: true, title: 'Success', message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
        // Reset form fields
        setFormData({ name: '', email: '', location: '', subject: '', message: '' });

        // Hide toast after 10 seconds
        setTimeout(() => setToast({ show: false, title: '', message: '', type: 'success' }), 10000);
      } else {
        setToast({ show: true, title: 'Error', message: data.message, type: 'error' });
        // Hide error toast after 10 seconds
        setTimeout(() => setToast({ show: false, title: '', message: '', type: 'error' }), 10000);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      setToast({ show: true, title: 'Error', message: 'Failed to send message. Please check your connection and try again.', type: 'error' });
      // Hide error toast after 10 seconds
      setTimeout(() => setToast({ show: false, title: '', message: '', type: 'error' }), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        
        {/* Left Side */}
        <div className="contact-info">
          <h2 className="contact-title">Let's discuss your Project</h2>
          {/* Replaced Lorem Ipsum with professional copy */}
          <p className="contact-subtitle">
            I'm currently available for freelance work and open to new opportunities. Reach out if you have a project in mind or just want to say hi.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item active">
              <div className="detail-icon"><img src={new URL('../assets/icons/location-active.svg', import.meta.url).href} alt="Location" /></div>
              <div className="detail-text">
                <span className="detail-label">Address:</span>
                <span className="detail-value">Kigali, Rwanda</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="detail-icon"><img src={new URL('../assets/icons/mail.svg', import.meta.url).href} alt="Mail" /></div>
              <div className="detail-text">
                <span className="detail-label">My Email:</span>
                <span className="detail-value">hello@prnc.dev</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="detail-icon"><img src={new URL('../assets/icons/phone.svg', import.meta.url).href} alt="Phone" /></div>
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
          {/* Replaced Lorem Ipsum with professional instruction */}
          <p className="contact-subtitle" style={{marginBottom: '2rem'}}>
           Fill out the form below, and I'll get back to you within 24 hours.
          </p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group active">
              <label>Name*</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
              <label>Subject*</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" />
            </div>
            <div className="form-group">
              <label>Message*</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required className="form-input" rows="4" style={{ resize: 'vertical' }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={isSubmitting}
                style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '500', cursor: isSubmitting ? 'not-allowed' : 'pointer', border: 'none', opacity: isSubmitting ? 0.7 : 1}}
              >
                {isSubmitting ? 'Sending...' : 'Submit'} 
                <img src={new URL('../assets/icons/send.svg', import.meta.url).href} alt="Send" style={{width: '16px', height: '16px'}} />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>
          <div className="toast-content">
            <span className="toast-icon">
              {toast.type === 'success' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              )}
              {toast.type === 'info' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              )}
              {toast.type === 'error' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
            </span>
            <div className="toast-message">
              <div className="toast-title">{toast.title}</div>
              <div className="toast-description">{toast.message}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}