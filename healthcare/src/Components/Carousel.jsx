import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Expert Advice on Getting Through Your First Holiday Season After the Loss of a Loved One",
      description: "Read our expert tips for dealing with loss and grief during the holidays",
      author: "Jacquelyne Froeber | 10 Dec 2024",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2tuUG5q0NZqv2oHk62UzKpn407TsBojrSVpnQboYvE5J87k0', // Add appropriate image paths
    },
    {
      title: "Tips for a Stress-Free Holiday Season",
      description: "Find ways to manage stress and stay grounded during the holidays.",
      author: "Jane Doe | 12 Dec 2024",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2tuUG5q0NZqv2oHk62UzKpn407TsBojrSVpnQboYvE5J87k0',
    },
    {
      title: "How to Stay Healthy During the Holidays",
      description: "Healthy eating and lifestyle tips to stay in shape during the festive season.",
      author: "John Smith | 14 Dec 2024",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2tuUG5q0NZqv2oHk62UzKpn407TsBojrSVpnQboYvE5J87k0',
    },
    {
      title: "Gift Ideas for Everyone on Your List",
      description: "Perfect gifts for family, friends, and colleagues.",
      author: "Emily Johnson | 16 Dec 2024",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2tuUG5q0NZqv2oHk62UzKpn407TsBojrSVpnQboYvE5J87k0',
    },
    {
      title: "Holiday Travel Tips: Packing and Planning",
      description: "Prepare for stress-free travel with these tips and tricks.",
      author: "Robert Brown | 18 Dec 2024",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2tuUG5q0NZqv2oHk62UzKpn407TsBojrSVpnQboYvE5J87k0',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds autoplay interval

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <img className="carousel-image" src={slide.image} alt={slide.title} />
              <div className="carousel-text">
                <h2 className="carousel-title">{slide.title}</h2>
                <p className="carousel-description">{slide.description}</p>
                <p className="carousel-author">{slide.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow left-arrow" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>›</button>

      <div className="carousel-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
