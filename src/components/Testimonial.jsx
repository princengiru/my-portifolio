import React from 'react';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        <div className="clients-header">
          <h2 className="section-title">Happy Clients</h2>
          <p className="section-subtitle">
            There are many variations of passages of Lorem Ipsum available,<br/>
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="clients-logos">
          <span className="client-logo">Google</span>
          <span className="client-logo" style={{ fontStyle: 'italic' }}>dribbble</span>
          <span className="client-logo client-logo-linkedin">Linked<span>in</span></span>
          <span className="client-logo">amazon</span>
          <span className="client-logo">Medium</span>
          <span className="client-logo">Spotify</span>
        </div>

        <div className="testimonial-header">
          <h2 className="section-title">Testimonial</h2>
          <p className="section-subtitle">
            There are many variations of passages of Lorem Ipsum available,<br/>
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="testimonial-content">
          <p className="testimonial-quote">
            "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec tempor odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta."
          </p>
          <h4 className="testimonial-author">Esther Howard</h4>
          <span className="testimonial-role">Managing Director, ABC company</span>
        </div>

        <div className="testimonial-pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
}
