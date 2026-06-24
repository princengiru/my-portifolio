import React, { useState, useRef, useEffect } from "react";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const gridRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=princengiru"
        );

        const data = await response.json();

        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const updatePages = () => {
    if (blogPosts.length === 0) {
      setTotalPages(1);
      return;
    }

    // Determine cards per view based on screen width
    const screenWidth = window.innerWidth;
    let cardsPerView = 4; // desktop default

    if (screenWidth <= 640) {
      cardsPerView = 1; // mobile
    } else if (screenWidth <= 1024) {
      cardsPerView = 2; // tablet
    }

    const pages = Math.ceil(blogPosts.length / cardsPerView);
    setTotalPages(pages);
  };

  useEffect(() => {
    updatePages();

    window.addEventListener("resize", updatePages);

    const timer = setTimeout(updatePages, 500);

    return () => {
      window.removeEventListener("resize", updatePages);
      clearTimeout(timer);
    };
  }, [blogPosts]);

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, clientWidth } = gridRef.current;

      // Only change page when we're at the start of a page (first card visible)
      // Use a threshold to prevent switching during scroll
      const threshold = 50; // pixels
      const pageIndex = Math.round(scrollLeft / clientWidth);
      
      // Check if we're close to the start of a page
      const distanceToPageStart = Math.abs(scrollLeft - (pageIndex * clientWidth));
      
      if (distanceToPageStart < threshold && pageIndex !== currentPage && pageIndex <= totalPages - 1) {
        setCurrentPage(pageIndex);
      }
    }
  };

  const handleDotClick = (index) => {
    if (gridRef.current) {
      const { clientWidth } = gridRef.current;

      gridRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
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
            Articles, tutorials and insights from my full stack development
            journey.
          </p>
        </div>

        <div
          className="blog-grid"
          ref={gridRef}
          onScroll={handleScroll}
        >
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                src={post.cover_image}
                alt={post.title}
                className="blog-image"
                loading="lazy"
              />

              <div className="blog-content">
                <span className="blog-meta">
                  {post.readable_publish_date} •{" "}
                  {post.reading_time_minutes} min read
                </span>

                <h3 className="blog-card-title">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  currentPage === index ? "active" : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}