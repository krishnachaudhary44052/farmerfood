import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Hero_sec.css';


const Footer = () => {
  return (
    <div className="hero-container1">
        <video
          className="hero-video1"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero_mode.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default Footer;
