import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const slides = [
    {
      image: 'https://media.istockphoto.com/id/1061399220/photo/adult-woman-having-a-visit-at-female-doctors-office.jpg?s=612x612&w=0&k=20&c=PpobknQpnwOHrkiH3r2WsB_fWN4DZRu2D27kAvN-eDA=',
      title: 'Welcome to CareCompanion',
      description: '',
    },
    {
      image: 'https://media.istockphoto.com/id/1168338927/photo/my-spirits-are-lifted-when-you-are-here.jpg?s=612x612&w=0&k=20&c=5-kEGtE3KdLKtutQoNQYefx1lxaBBtbRsiBrIZbdnmw=',
      title: 'Care for Women',
      description: 'Quality, compassionate healthcare you can feel good about.',
    },
    {
      image: 'https://media.gettyimages.com/id/2148393451/photo/mid-adult-female-patient-shakes-hands-with-her-doctor.jpg?s=612x612&w=0&k=20&c=4hVnUzATWt4Z5dQ5EeCPBWFTbZtxAUlY1WR7I4vsh7g=',
      title: 'Yes, we take insurance',
      description: 'CareCompanion may not look like a typical doctor’s office, but you can still use your insurance for high-quality care—most members do!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-image">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
