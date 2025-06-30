import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/slider.css';

const images = [
  '/image/slider-image.png',
  '/image/slider-image.png',
  '/image/slider-image.png'
];

const FullWidthSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0 overflow-hidden slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default FullWidthSlider;
