import React, { useState, useEffect } from "react";
import './car.css'; // Ensure this file contains the necessary styles
import slide1 from './assets/images/image1.jpg'; // Correct relative path to images
import slide2 from './assets/images/image2.jpg';
import slide6 from './assets/images/imag5.jpg';
import slide4 from './assets/images/image4.jpg';
import slide5 from './assets/images/image6.jpg';

const App = () => {
  const slides = [
    {
      image: slide1, // Use imported images
      title: "Empowering Women to Live Healthier Lives",
      description: "Explore expert healthcare services tailored to every stage of life.",
      alt: "Women's Health Slide 1",
    },
    {
      image: slide2, // Use imported images
      title: "Wellness Matters",
      description: "Learn how to maintain a balanced and healthy lifestyle.",
      alt: "Women's Health Slide 2",
    },
    {
      image: slide6, // Use imported images
      title: "Care You Can Trust",
      description: "Explore personalized care options for your health journey.",
      alt: "Women's Health Slide 3",
    },
    {
      image: slide4, // Use imported images
      title: "Our Comprehensive Health Services",
      description: "From preventive care to specialized treatments, we’ve got you covered.",
      alt: "Women's Health Slide 4",
    },
    {
      image: slide5, // Use imported images
      title: "What Our Patients Are Saying",
      description: "Real stories from women who trust us with their health.",
      alt: "Women's Health Slide 5",
    },
  ];

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

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
};

export default App;
