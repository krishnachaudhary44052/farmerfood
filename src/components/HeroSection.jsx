import React from 'react';
import '../style/HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero_video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="text-center text-white">
          <h1 className="fw-bold fst-italic">Healthier Meals, On the Go</h1>
          <button className="btn btn-success mt-3 px-4 py-2">BROWSE MENU</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
