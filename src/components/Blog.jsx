import React, { useState, useRef, useEffect } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop", 
      date: "22 Oct, 2023 / 246 Comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&h=300&fit=crop", 
      date: "22 Oct, 2023 / 246 Comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500&h=300&fit=crop", 
      date: "22 Oct, 2023 / 246 Comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop", 
      date: "22 Oct, 2023 / 246 Comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop", 
      date: "24 Oct, 2023 / 18 Comments",
      title: "Exploring the depth of modern web development"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504607798333-52a30db54a5d?w=500&h=300&fit=crop", 
      date: "26 Oct, 2023 / 35 Comments",
      title: "Design principles for high-converting landing pages"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop", 
      date: "28 Oct, 2023 / 12 Comments",
      title: "Data-driven decision making in UI/UX workflows"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop", 
      date: "30 Oct, 2023 / 50 Comments",
      title: "How to optimize React applications for production"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const gridRef = useRef(null);

  const updatePages = () => {
    if (gridRef.current) {
      const { scrollWidth, clientWidth } = gridRef.current;
      if (clientWidth > 0) {
        setTotalPages(Math.round(scrollWidth / clientWidth) || 1);
      }
    }
  };

  useEffect(() => {
    updatePages();
    // Use resize observer or window resize event
    window.addEventListener('resize', updatePages);
    // Extra update in case images load later and change dimensions
    const timer = setTimeout(updatePages, 500);

    return () => {
      window.removeEventListener('resize', updatePages);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, clientWidth } = gridRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== currentPage) {
        setCurrentPage(index);
      }
    }
  };

  const handleDotClick = (index) => {
    if (gridRef.current) {
      const { clientWidth } = gridRef.current;
      gridRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
      setCurrentPage(index);
    }
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog</h2>
          <p className="blog-subtitle">
            There are many variations of passages of Lorem Ipsum available,<br />
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="blog-grid" ref={gridRef} onScroll={handleScroll}>
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <span className="blog-meta">{post.date}</span>
                <h3 className="blog-card-title">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentPage === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
