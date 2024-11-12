import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'none'
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out'
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Mostrar cursor ao mover o mouse
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = 1;
      follower.style.opacity = 1;
    });

    // Esconder cursor quando sair da janela
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = 0;
      follower.style.opacity = 0;
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', () => {});
      document.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
