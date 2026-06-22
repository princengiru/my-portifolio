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



      </div>
    </section>
  );
}