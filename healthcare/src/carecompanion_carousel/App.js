import React from "react";
import Carousel from "./Carousel"; // Import the Carousel component
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
    },{
      image: slide5, // Use imported images
      title: "What Our Patients Are Saying",
      description: "Real stories from women who trust us with their health.",
      alt: "Women's Health Slide 5",
    },
  ];

  return (
    <div>
      <h1>CareCompanion</h1>
      <Carousel slides={slides} /> {/* Pass the slides data to the Carousel */}
    </div>
  );
};

export default App;
