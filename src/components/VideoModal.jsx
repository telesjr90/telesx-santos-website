import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './VideoModal.css';

const VideoModal = ({ videoUrl, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(overlayRef.current, {
      opacity: 0,
      duration: 0.3
    })
    .from(modalRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.1');

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="video-modal-overlay" ref={overlayRef} onClick={onClose}>
      <div className="video-modal" ref={modalRef} onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="video-container">
          <iframe
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
