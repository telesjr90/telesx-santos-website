import React from 'react';
import { gsap } from 'gsap';
import './Loading.css';

const Loading = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1>Telesx Santos</h1>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default Loading;
