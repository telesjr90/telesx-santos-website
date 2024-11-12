import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from 'gsap';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import VideoGallery from './components/VideoGallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app dark-theme">
        <Navbar />
        <Hero />
        <Portfolio />
        <About />
        <VideoGallery />
        <Blog />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
