import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile1 from "./assets/images/profile1.jpg";
import profile2 from "./assets/images/profile2.jpg";
import profile3 from "./assets/images/profile3.jpg";
import profile4 from "./assets/images/profile4.jpg";
import profile5 from "./assets/images/profile5.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "CareCompanion has been a lifesaver for my health journey. The support and resources are unmatched!",
      name: "Jane Doe",
      role: "Wellness Coach",
      image: profile1,
    },
    {
      text: " Platform gave me the confidence to prioritize my health. Thank you for such a safe space!",
      name: "Emily Smith",
      role: "Entrepreneur",
      image: profile2,
    },
    {
      text: "The personalized tips and expert resources helped me regain balance in my life. I feel empowered and more in control of my health.",
      name: "Sophia Lee",
      role: "Teacher",
      image: profile3,
    },
    {
      text: "Women’s health is often overlooked, but not here. I finally feel heard and supported in my health journey.",
      name: "Hannah Brown",
      role: "Freelancer",
      image: profile4,
    },
    {
      text: "I’ve finally found a space that truly understands women’s unique health needs. The insights and advice here are invaluable!",
      name: "Olivia Green",
      role: "Artist",
      image: profile5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <i class="fas fa-quote-left quote-icon"></i>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <span className="testimonial-role">{testimonial.role}</span>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="profile-img"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
