import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="lead">Escritor apaixonado por criar histórias que conectam pessoas.</p>
            <p>Com mais de X anos de experiência em escrita criativa, tenho explorado diversos gêneros literários, sempre buscando inovar e entreter.</p>
            
            <div className="skills">
              <h3>Especialidades</h3>
              <div className="skill-tags">
                <span>Comédia</span>
                <span>Fantasia</span>
                <span>Poesia</span>
                <span>Roteiros</span>
                <span>Storytelling</span>
              </div>
            </div>

            <div className="stats">
              <div className="stat-item">
                <h4>10+</h4>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Livros Publicados</p>
              </div>
              <div className="stat-item">
                <h4>100k+</h4>
                <p>Leitores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
