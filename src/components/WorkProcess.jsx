import React from 'react';

export default function WorkProcess() {
  const processes = [
    {
      id: 1,
      title: "1. Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "2. Analyze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "3. Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "4. Launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      
      {/* Left Column: Text */}
      <div className="w-full lg:w-[35%]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Work Process
        </h2>
        <div className="space-y-4 text-gray-500 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget dictum nec, ab llandit et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget dictum nec.
          </p>
        </div>
      </div>

      {/* Right Column: Cards Grid */}
      <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-6">
        {processes.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}