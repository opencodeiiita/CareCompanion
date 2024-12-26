import React from "react";
import Footer from "../src/Components/Footer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import BookNow from "./Pages/BookNow";
import Home from "./Pages/Home";
import WhatWeTreat from "./Components/WhatWeTreat";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel"; // Import Carousel component
import TestimonialSection from "./Testimonial/Carousel";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Default route includes the Home page with Carousel */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Home />
                <TestimonialSection />
                <Footer />
              </>
            }
          />

          {/* Other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/WhatWeTreat" element={<WhatWeTreat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
