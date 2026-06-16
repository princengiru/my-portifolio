import React from 'react';

export default function WorkProcess() {
  const processes = [
    {
      id: 1,
      title: "1. Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="process-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "2. Analyze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="process-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
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
        <svg className="process-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
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