import React from "react";
import services from "../Data/healthTopic"; // Import your services data
import { useNavigate } from "react-router-dom";

const WhatWeTreat = () => {
  const navigate = useNavigate();
  return (
    
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Section Header */}
      <div className="text-left mb-8">
        <h1 className="text-4xl font-serif font-medium text-pink-600">What We Treat</h1>
        <p className="text-lg text-gray-600 mt-2">
          In-person and virtual holistic healthcare for women in areas ranging from menstrual and sexual health to cancer screenings to fertility and postpartum care. All delivered with radical empathy, clinical excellence, and no judgment.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative shadow-lg rounded-lg transition-transform transform hover:scale-105 group"
          >
            <div className="relative w-full h-72">
            {/* Image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 z-10"
              
            />
            </div>
            {/* Title */}
            <div className="bottom-0 left-0 right-0 bg-white text-center py-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h2>
            </div>
            
            {/* Hover Overlay */}
            
            <div className="absolute inset-0 bg-pink-600 flex flex-col justify-center item-center text-left opacity-5 hover:opacity-100 transform transition-opacity duration-30ms z-0">
                <p className="text-lg font-bold text-white text-left ml-5 hover:opacity-100 transition-opacity">{service.title}</p>
              <p className="text-left text-white mb-4 px-4 hover:opacity-100 transition-opacity">{service.description}</p>
              <p className="text-left text-white mb-4 px-4 hover:opacity-100 transition-opacity">{service.talkToUsAbout}</p>
              <button
                className="bottom-0 bg-white text-grey-200 px-4 py-2 mt-5 ml-10 mr-10 hover:opacity-100 rounded hover:bg-blue-600 transition-opacity"
                onClick={() => navigate(service.link)}
              >
                Learn More 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeTreat;

