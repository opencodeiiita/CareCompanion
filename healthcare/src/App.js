import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import BookNow from './Pages/BookNow';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/BookNow" element={<BookNow/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
