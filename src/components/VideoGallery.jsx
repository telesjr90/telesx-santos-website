import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoGallery.css';

gsap.registerPlugin(ScrollTrigger);

const VideoGallery = () => {
  const sectionRef = useRef(null);
  const videosRef = useRef([]);

  const videos = [
    {
      id: 1,
      title: "Comédia Stand-up",
      thumbnail: "/images/videos/comedy-1.jpg",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
      category: "Comédia"
    },
    {
      id: 2,
      title: "Poesia Declamada",
      thumbnail: "/images/videos/poetry-1.jpg",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
      category: "Poesia"
    },
    {
      id: 3,
      title: "Bastidores do Livro",
      thumbnail: "/images/videos/behind-1.jpg",
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
      category: "Bastidores"
    }
  ];

  useEffect(() => {
    // Animação do título
    gsap.from('.gallery-title', {
      scrollTrigger: {
        trigger: '.gallery-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animação dos cards de vídeo
    videosRef.current.forEach((video, index) => {
      gsap.from(video, {
        scrollTrigger: {
          trigger: video,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
      });
    });
  }, []);

  const openVideo = (url) => {
    // Implementar modal de vídeo
    console.log('Abrir vídeo:', url);
  };

  return (
    <section className="video-gallery" ref={sectionRef}>
      <div className="container">
        <h2 className="gallery-title">Galeria de Vídeos</h2>
        
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="video-card"
              ref={el => videosRef.current[index] = el}
              onClick={() => openVideo(video.url)}
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="video-info">
                <span className="video-category">{video.category}</span>
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
