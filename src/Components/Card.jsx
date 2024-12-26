import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ imageUrl, title, description, link, talkToUsAbout }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 group">
      {/* Image Container */}
      <div className="top">
      <div className="relative w-full h-40">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
        />
        {/* Solid Overlay on Hover */}
        <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      </div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Hover Overlay (for description and button) */}
      <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center text-center transition-opacity duration-300 z-20">
      <h4 className="text-lg font-bold text-white text-left transition-opacity">{title}</h4>
        <p className="text-left text-white-600 mb-4 px-4 ">{description}</p>
        <p className="text-left text-white-600 mb-4 px-4 ">{talkToUsAbout}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(link)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;


