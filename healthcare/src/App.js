import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
    {/* Subscribe Newsletter Section */}
    <div className="footer__subscribe">
      <div className="subscribe__box">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news and tips on women’s health, wellness, and more!</p>
        <div className="subscribe__form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  
    {/* Box wrapping all columns */}
    <div className="columns__box">
      <div className="footer__columns">
        <div className="column">
          <h3>What We Treat</h3>
          <ul>
            <li>Gynecological Health</li>
            <li>Menstrual disorders</li>
            <li>Polycystic Ovary Syndrome (PCOS)</li>
            <li>Endometriosis</li>
            <li>Fibroids</li>
            <li>Reproductive Health</li>
            <li>Fertility support</li>
            <li>Pregnancy and prenatal care</li>
            <li>Mental Health</li>
            <li>Bone health</li>
            <li>Preventative Care</li>
            <li>Pap smears and pelvic exams</li>
            <li>Sexual health concerns</li>
          </ul>
        </div>
  
        <div className="column">
          <h3>Our Experts</h3>
          <ul>
            <li>Obstetrician-Gynecologist (OB-GYN)</li>
            <li>Reproductive Endocrinologist</li>
            <li>Maternal-Fetal Medicine Specialist</li>
            <li>Certified Nurse Midwife (CNM)</li>
            <li>Pelvic Health Physical Therapist</li>
            <li>Breast Health Specialist</li>
            <li>Urogynecologist</li>
            <li>Endocrinologist</li>
            <li>Registered Dietitian (RD)</li>
            <li>Oncologist</li>
            <li>Dermatologist</li>
            <li>Lactation Consultant</li>
            <li>Sexual Health Specialist</li>
          </ul>
        </div>
  
        <div className="column">
          <h3>Our Services</h3>
          <ul>
            <li>Consultation</li>
            <li>Vaccination</li>
            <li>Lab Tests</li>
            <li>Scans and Procedures</li>
          </ul>
        </div>
  
        <div className="column">
          <h3>News & Resources</h3>
          <ul>
            <li>Blog</li>
          </ul>
        </div>
  
        <div className="column">
          <h3>Join Us</h3>
          <div className="social__icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <h3>Contact Us</h3>
          <p>Phone: +123 456 7890</p>
          <div className="footer__whatsapp">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>Need Help?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;

