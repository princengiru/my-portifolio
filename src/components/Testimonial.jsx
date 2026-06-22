import React from 'react';
// Import the actual logos from your assets folder
import gonarazaLogo from '../assets/gonarazalogo.png';
import lkGroupLogo from '../assets/lkgrouplogo.png';
import chairFemmesLogo from '../assets/chairfemmeslogo.png';
import eliteLogo from '../assets/elitelogo.png';

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

        {/* Updated Clients Logos Section */}
        <div className="clients-logos">
          <img src={gonarazaLogo} alt="Gonaraza" className="client-logo" />
          <img src={lkGroupLogo} alt="LK Group" className="client-logo" />
          <img src={chairFemmesLogo} alt="Chair Femmes" className="client-logo" />
          <img src={eliteLogo} alt="Elite Concierge" className="client-logo" />
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