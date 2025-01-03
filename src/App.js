import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import BookNow from './Pages/BookNow';
import Home from './Pages/Home';
import WhatWeTreat from "./Components/WhatWeTreat";
import Menstrual from './Pages/Menstrual';
import PCOS from './Pages/PCOS';
import CancerPrevention from './Pages/CancerPrevention';
import Pregnancy from './Pages/Pregnancy';
import MentalHealth from './Pages/MentalHealth';
import Postpartum from './Pages/Postpartum';
import Carousel from './Components/Carousel'; // Import Carousel component
import Detailsb from './Components/Detailsb';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Default route includes the Home page with Carousel */}
          <Route path="/" element={<>
            <Carousel />
            <Home />
          </>} />

          {/* Other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/WhatWeTreat" element={<>
            <WhatWeTreat />
            <Detailsb /> {/* Add Detailsb component below WhatWeTreat */}
          </>} />
          <Route path="/Pregnancy" element={<Pregnancy />} />
          <Route path="/Menstrual" element={<Menstrual />} />
          <Route path="/MentalHealth" element={<MentalHealth />} />
          <Route path="/CancerPrevention" element={<CancerPrevention />} />
          <Route path="/PCOS" element={<PCOS />} />
          <Route path="/Postpartum" element={<Postpartum />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
