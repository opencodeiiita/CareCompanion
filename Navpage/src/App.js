import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSearch = () => {
    console.log("Search Query: ", searchQuery);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        
        <div className="navbar-logo">
          <h4>Proactive For Her</h4>
        </div>

        
        <nav className="navbar-links">
          <div className="dropdown">
            <a href="#" className="dropbtn">Care for Her</a>
            <div className="dropdown-content horizontal-dropdown">
              <DropdownSection title="What We Treat" items={[
                { href: "#sexual-health", label: "Sexual Health" },
                { href: "#menstrual-health", label: "Menstrual Health" },
                { href: "#pcos", label: "PCOS" },
                { href: "#painful-sex", label: "Painful Sex & Vaginitis" },
                { href: "#pelvic-health", label: "Pelvic Health" },
                { href: "#cancer-prevention", label: "Cancer Prevention" },
                { href: "#fertility", label: "Fertility" },
                { href: "#postpartum", label: "Postpartum" },
                { href: "#mental-health", label: "Mental Health" },
                { href: "#pregnancy", label: "Pregnancy" },
              ]} />
              <DropdownSection title="Our Services" items={[
                { href: "#consultation", label: "Consultation" },
                { href: "#lab-tests", label: "Lab Tests" },
                { href: "#vaccinations", label: "Vaccinations" },
                { href: "#scans-procedures", label: "Scans & Procedures" },
              ]} />
              <DropdownSection title="Our Experts" items={[
                { href: "#gynecologist", label: "Gynecologist" },
                { href: "#fertility-specialist", label: "Fertility Specialist" },
                { href: "#physiotherapist", label: "Physiotherapist" },
                { href: "#nutritionist", label: "Nutritionist" },
                { href: "#dermatologist", label: "Dermatologist" },
                { href: "#psychologist", label: "Psychologist" },
                { href: "#lactation-specialist", label: "Lactation Specialist" },
                { href: "#pediatrician", label: "Pediatrician" },
              ]} />
            </div>
          </div>
          <a href="#locations">Locations</a>
          <a href="#about-us">About Us</a>
          <a href="#tools">Tools</a>
        </nav>

       
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        
        <div className="navbar-cta">
          <button className="btn btn-book-now">Book Now</button>
          <button className="btn btn-login" onClick={openLoginModal}>Login</button>
        </div>
      </header>

      
      {isLoginModalOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target.className === "modal-overlay" && closeLoginModal()}
        >
          <div className="login-modal">
            <h2>Login</h2>
            <button onClick={closeLoginModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownSection = ({ title, items }) => (
  <div className="dropdown-section">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
