// pages/Home.jsx
import React from 'react';
// import Header from '../Components/Header';  // Adjust the path if necessary
import Footer from '../Components/Footer';  // Adjust the path if necessary

const Home = () => {
  return (
    <div className="home">
      {/* Header Component */}
      {/* <Header /> */}

      {/* Main Content */}
      <main>
        <h1>Welcome to Our Healthcare Platform</h1>
        <p>Explore a wide range of services and get the best care tailored for you.</p>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
