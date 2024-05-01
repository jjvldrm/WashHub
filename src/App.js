import React from 'react';
import LandingPage from './pages/LandingPage.js';
import ServicePage from './pages/ServicePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}
