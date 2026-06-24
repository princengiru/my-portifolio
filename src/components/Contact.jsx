import React, { useState } from 'react';

export default function Contact() {
  // 1. Initialize state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(""); // State for UI feedback messages

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
    setResult(""); // Clear any previous messages

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
        setResult("✅ Message sent successfully! I will get back to you soon.");
        // Reset form fields
        setFormData({ name: '', email: '', location: '', budget: '', subject: '', message: '' }); 
        
        // Optional: clear the success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("❌ Error: " + data.message);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Failed to send message. Please check your connection and try again.");
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
            Fill out the form below with your project details, and I'll get back to you within 24 hours.
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
            <div className="form-row">
              <div className="form-group">
                <label>Budget*</label>
                <input type="text" name="budget" value={formData.budget} onChange={handleChange} required className="form-input" />
              </div>
              <div className="form-group">
                <label>Subject*</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" />
              </div>
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

              {/* Added a span to display the success/error message directly next to the button */}
              {result && (
                <span style={{ fontSize: '0.9rem', color: result.includes('❌') ? '#ef4444' : '#10b981', fontWeight: '500' }}>
                  {result}
                </span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}