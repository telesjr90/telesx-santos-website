import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out"
      }
    });
    
    // Garante visibilidade inicial
    gsap.set(heroRef.current, {
      opacity: 1,
      clearProps: "all"
    });

    // Nova sequência de animação
    tl.from(titleRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })
    .from(contentRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1
    }, "-=0.4");
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="title-wrapper" ref={titleRef}>
            <h3 className="subtitle">👋 Olá, eu sou</h3>
            <h1 className="title">Telesx Santos</h1>
            <h2 className="profession">Escritor & Criador de Conteúdo</h2>
          </div>
          
          <div className="content-wrapper" ref={contentRef}>
            <p className="description">
              Especializado em comédia, fantasia, poesia e vídeos
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Ver Portfolio</button>
              <button className="btn-secondary">Patreon</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
