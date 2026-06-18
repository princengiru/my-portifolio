import React from 'react';

export default function WorkProcess() {
  const processes = [
    {
      id: 1,
      title: "1. Research",
      description: "Understanding your goals, target audience, and core requirements to lay a solid foundation for the project.",
      icon: (
        <img src={new URL('../assets/icons/research1.svg', import.meta.url).href} alt="" />
      )
    },
    {
      id: 2,
      title: "2. Analyze",
      description: "Evaluating technical feasibility, selecting the optimal tech stack, and mapping out the system architecture.",
      icon: (
       <img src={new URL('../assets/icons/analyse.svg', import.meta.url).href} alt="" />
      )
    },
    {
      id: 3,
      title: "3. Design", 
      description: "Crafting intuitive user interfaces, wireframes, and brand identities that ensure a seamless user experience.",
      icon: (
        <svg className="process-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "4. Launch",
      description: "Writing clean, scalable code, followed by rigorous testing and deployment to bring the product to life.",
      icon: (
        <img src={new URL('../assets/icons/launch.svg', import.meta.url).href} alt="" />
      )
    }
  ];

  /* Reorder to match the visual layout in design: 
     Column 1: Research, Design
     Column 2: Analyze, Launch 
     If we use CSS Grid, 1, 2, 3, 4 will be top-left, top-right, bottom-left, bottom-right.
     So we want: 
     1 -> Research
     2 -> Analyze
     3 -> Design
     4 -> Launch
  */

  return (
    <div className="process-container">
      {/* Left Column: Text */}
      <div className="process-text-column">
        <h2 className="process-title">Work Process</h2>
        <div className="process-description">
          <p>
            My approach combines creative problem-solving with technical precision. Whether I am architecting a complex backend database or designing an intuitive mobile interface, I follow a proven, structured workflow.
          </p>
          <p>
            From the initial concept to the final deployment, I ensure every step is carefully planned and executed to deliver scalable and impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Right Column: Cards Grid */}
      <div className="process-grid">
        {processes.map((item, index) => (
          <div 
            key={item.id} 
            className={`process-card ${index === 0 ? 'active' : ''}`}
          >
            <div className="process-icon-container">
              {item.icon}
            </div>
            
            <h3 className="process-card-title">{item.title}</h3>
            <p className="process-card-text">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}