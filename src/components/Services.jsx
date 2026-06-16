import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "User Experience (UX)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
    },
    {
      id: 2,
      title: "User Interface (UI)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
    },
    {
      id: 3,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Left Column */}
        <div className="services-text-column">
          <h2 className="services-title">What I do?</h2>
          <div className="services-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
            </p>
          </div>
          <button className="btn btn-primary">Say Hello!</button>
        </div>

        {/* Right Column */}
        <div className="services-list-column">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${index === 0 ? 'active' : ''}`}
            >
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
