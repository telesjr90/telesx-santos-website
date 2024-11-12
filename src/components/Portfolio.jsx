import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const works = [
    {
      id: 1,
      title: "Livro de Comédia",
      category: "Comédia",
      image: "/images/portfolio/comedy-book.jpg",
      description: "Uma coletânea de histórias hilárias",
      link: "#"
    },
    {
      id: 2,
      title: "Poemas da Noite",
      category: "Poesia",
      image: "/images/portfolio/poetry-night.jpg",
      description: "Versos que tocam a alma",
      link: "#"
    },
    {
      id: 3,
      title: "Mundo Fantástico",
      category: "Fantasia",
      image: "/images/portfolio/fantasy-world.jpg",
      description: "Uma aventura épica",
      link: "#"
    },
    {
      id: 4,
      title: "Vídeos de Comédia",
      category: "Vídeo",
      image: "/images/portfolio/comedy-videos.jpg",
      description: "Série de vídeos humorísticos",
      link: "#"
    }
  ];

  const filters = ['all', 'Comédia', 'Poesia', 'Fantasia', 'Vídeo'];

  const filteredWorks = activeFilter === 'all' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Meu Portfolio</h2>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'Todos' : filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredWorks.map(work => (
            <div 
              className="portfolio-card" 
              key={work.id}
              data-aos="fade-up"
              data-aos-delay={work.id * 100}
            >
              <div className="portfolio-img">
                <img src={work.image} alt={work.title} />
                <div className="portfolio-overlay">
                  <a href={work.link} className="portfolio-link">
                    <i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="category">{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
