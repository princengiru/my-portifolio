import React from 'react';

export default function WorkProcess() {
  const processes = [
    {
      id: 1,
      title: "1. Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <img src={new URL('../assets/icons/research1.svg', import.meta.url).href} alt="" />
      )
    },
    {
      id: 2,
      title: "2. Analyze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
       <img src={new URL('../assets/icons/analyse.svg', import.meta.url).href} alt="" />
      )
    },
    {
      id: 3,
      title: "2. Design", /* Matching the design image text which has "2. Design" below "1. Research" */
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="process-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "4. Launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
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