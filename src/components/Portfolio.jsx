import React from 'react';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", 
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Vivamus eleifend convallis ante, non pharetra libero lacinia laoreet. Donec id imperdiet lacus."
    }
  ];

  return (
    <div className="portfolio-section-container">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Portfolio</h2>
        <p className="portfolio-subtitle">
          There are many variations of passages of Lorem Ipsum available,<br />
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-content">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p className="portfolio-card-text">{item.description}</p>
              <button className="btn btn-outline portfolio-btn">Case Study &rarr;</button>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-footer">
        <button className="btn btn-primary">More Project</button>
      </div>
    </div>
  );
}
