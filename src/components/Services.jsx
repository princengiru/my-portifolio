import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "Building responsive, high-performance web applications from the ground up. I create seamless front-end interfaces with React and Next.js, powered by robust, scalable backends using Node.js, Express, and PHP."
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Developing smooth, cross-platform mobile experiences for both iOS and Android. Using React Native and Expo, I build applications that deliver native-like performance and intuitive navigation."
    },
    {
      id: 3,
      title: "Brand Identity & UI/UX",
      description: "Crafting visually compelling brand identities and user-centric interfaces. From wireframes to complete corporate identity kits, I ensure your digital presence is both beautiful and highly functional."
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
              I specialize in transforming complex problems into elegant, scalable digital solutions. With expertise across the entire development stack and an eye for design, I bring ideas to life from initial concept to final deployment.
            </p>
            <p>
              Whether you need a dynamic web platform, a custom mobile application, or a complete brand overhaul, I deliver high-quality products tailored directly to your business goals.
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