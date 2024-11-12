import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "A Arte da Comédia na Literatura",
      excerpt: "Como criar histórias que fazem as pessoas rirem...",
      date: "15 Mar 2024",
      category: "Comédia",
      image: "/images/blog/comedy-art.jpg"
    },
    {
      id: 2,
      title: "Construindo Mundos Fantásticos",
      excerpt: "Um guia para criação de universos mágicos...",
      date: "10 Mar 2024",
      category: "Fantasia",
      image: "/images/blog/fantasy-worlds.jpg"
    },
    {
      id: 3,
      title: "Poesia Moderna: Quebrando Regras",
      excerpt: "Como a poesia contemporânea está mudando...",
      date: "5 Mar 2024",
      category: "Poesia",
      image: "/images/blog/modern-poetry.jpg"
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">
                  Ler mais
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
