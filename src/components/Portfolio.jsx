import React from 'react';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", 
      category: "MOBILE DEVELOPMENT",
      title: "Prince Picks Streaming App",
      description: "A cross-platform movie streaming application built with React Native and Expo, featuring custom navigation and seamless API integration.",
      liveLink: null,
      status: "In Development"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", 
      category: "FULL-STACK WEB",
      title: "Chair Femmes",
      description: "A web platform dedicated to holistic sexology and women's empowerment, built with PHP and CSS to offer a safe digital space for therapy and wellness services.",
      liveLink: "https://chairfemmes.com",
      status: "Live Preview"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop", 
      category: "CORPORATE PLATFORM",
      title: "LK Group World",
      description: "A robust corporate website for a leading technology solutions provider, highlighting their innovative IT support, digital consulting, and global services.",
      liveLink: "https://lkgroupworld.com",
      status: "Live Preview"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop", 
      category: "BUSINESS WEBSITE",
      title: "Elite Concierge",
      description: "A sophisticated digital presence for a premier lifestyle management service, designed to showcase personalized, luxury concierge solutions tailored for Rwanda.",
      liveLink: "https://eliteconcierge.rw",
      status: "Live Preview"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", 
      category: "NON-PROFIT",
      title: "CEFAPEK Organization",
      description: "An informative NGO platform focused on empowering local communities through sustainable agricultural and livestock development in the Kamonyi District.",
      liveLink: "https://cefapek.org",
      status: "Live Preview"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", 
      category: "WEB PLATFORM",
      title: "Gonaraza",
      description: "A comprehensive digital marketplace and business directory connecting businesses and customers across Rwanda through dynamic listings, jobs, and digital services.",
      liveLink: "https://gonaraza.com",
      status: "Live Preview"
    }
  ];

  return (
    <div className="portfolio-section-container">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Portfolio</h2>
        <p className="portfolio-subtitle">
          A selection of my recent live projects across web and mobile development.<br />
          <em>Note: Source code repositories are kept private to protect client IP, but code samples are available upon request.</em>
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
              
              {item.liveLink ? (
                <a 
                  href={item.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline portfolio-btn"
                  style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                >
                  {item.status} &rarr;
                </a>
              ) : (
                <button 
                  className="btn btn-outline portfolio-btn" 
                  disabled
                  style={{ opacity: 0.6, cursor: 'not-allowed' }}
                >
                  {item.status}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-footer">
        <button className="btn btn-primary">More Projects</button>
      </div>
    </div>
  );
}