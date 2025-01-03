import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../Pages/Story';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-menu">
          <div className="dropdown">
            <button className="dropbtn">Care Companion </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>What We Treat</h3>
                  <ul>
                    <li>Sexual Health</li>
                    <li>Menstrual Health</li>
                    <li>PCOS</li>
                    <li>Vaginismus</li>
                    <li>Pelvic Health</li>
                    <li>Cancer Prevention</li>
                    <li>Fertility</li>
                    <li>Postpartum</li>
                    <li>Mental Health</li>
                    <li>Pregnancy</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>Our Services</h3>
                  <ul>
                    <li>Consultation</li>
                    <li>Lab Tests</li>
                    <li>Vaccinations</li>
                    <li>Scans & Procedures</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>Our Experts</h3>
                  <ul>
                    <li>Gynecologist</li>
                    <li>Fertility Specialist</li>
                    <li>Physiotherapist</li>
                    <li>Nutritionist</li>
                    <li>Dermatologist</li>
                    <li>Psychologist</li>
                    <li>Lactation Specialist</li>
                    <li>Pediatrician</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
          </div>
        </div>
        <div className="navbar-cta">
          <Link to="/BookNow" className="book-now">Book Now</Link>
          <Link to="/login" className="login">Login</Link>
          <Link to="/location" className="location">Location</Link>
          <Link to="/About" className="about-us">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
