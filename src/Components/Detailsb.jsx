import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Detailsb.css";

const Detailsb = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const services = [
    {
      title: "General Checkups",
      description: "Comprehensive health evaluations tailored to your needs.",
      imgSrc: "https://media.istockphoto.com/id/1342134434/photo/caring-doctor-listens-to-patient.jpg?s=612x612&w=0&k=20&c=oTy-3urXPXBh_7oNGQS-mbleCsKpcxGz_-WLcL40EMk=", // Replace with actual image URLs
    },
    {
      title: "Specialist Consultation",
      description: "Expert guidance from experienced healthcare professionals.",
      imgSrc: "https://media.istockphoto.com/id/1344792109/photo/doctor-measuring-blood-pressure-to-a-smiling-woman.jpg?s=612x612&w=0&k=20&c=uDDX8TNk_ZyMUO3TsIY1dsk9iF6wPGfCahCwUxAA5_8=", // Replace with actual image URLs
    },
    {
      title: "Wellness Programs",
      description: "Personalized wellness plans for a healthier lifestyle.",
      imgSrc: "https://media.istockphoto.com/id/1328370759/photo/doctor-nurse-giving-vaccine-injection-to-pregnant-woman.jpg?s=612x612&w=0&k=20&c=CVpD6PBPMu26g7EKufVlBQs3J8uqv7oM4wTEONXuVHw=", // Replace with actual image URLs
    },
    {
      title: "Emergency Care",
      description: "Round-the-clock support for urgent medical needs.",
      imgSrc: "https://media.istockphoto.com/id/1125663091/photo/doctor-checking-woman-pregnancy-during-sonography-procedure.jpg?s=612x612&w=0&k=20&c=3I_3J1aBYdVOedeSMmrCYk1_fM6p_4S6jOFoB1gxoQI=", // Replace with actual image URLs
    },
  ];

  return (
    <div className="details-section">
      {/* Details Boxes */}
      <div className="details-container">
        <div className="detail-box">
          <h2>You Are Seen</h2>
          <p>
            Modern healthcare created for you. We know you want a comfortable and
            safe place under one roof.
          </p>
        </div>
        <div className="detail-box">
          <h2>You Are Heard</h2>
          <p>
            Your concerns and preferences matter. We listen, understand, and support
            you throughout your health journey. No judgment ever. First, we hear your
            questions and answer them all.
          </p>
        </div>
        <div className="detail-box">
          <h2>You Are Our Partner</h2>
          <p>
            We believe in empowering you to make informed decisions, ensuring a
            collaborative healthcare experience. We don’t believe in one-sided
            conversations.
          </p>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="highlight-box">
        <p className="highlight-text">
          This is <strong>radical empathy</strong>. This is <strong>proactive for her</strong>.
        </p>
      </div>

      {/* Our Services Section */}
      <h2 className="services-heading">Our Services</h2>
      <p className="services-description">
        Explore the wide range of services we offer to cater to your health needs.
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={service.title} className="card-image" />
            <h3 className="card-title">{service.title}</h3>
            <div className="card-overlay">
              <p>{service.description}</p>
              <button
                className="book-now-btn"
                onClick={() => navigate("/BookNow")} // Navigate to BookNow page
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detailsb;
