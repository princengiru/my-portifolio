import React from 'react';

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
    }
  ];

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

        <div className="blog-grid">
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

        <div className="blog-pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
