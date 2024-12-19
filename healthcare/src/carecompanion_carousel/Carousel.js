import React, { useState, useEffect } from "react";
import "./car.css"; 

const Carousel = ({ slides = [] }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    if (slides.length === 0) return; 

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex, slides.length]); 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    ); 
  };

  const goToSlide = (index) => {
    setCurrentIndex(index); 
  };

  if (!slides.length) {
    return <div>No slides available</div>; 
  }

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.alt} />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>

      {/* Dots navigation */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
