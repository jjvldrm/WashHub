import React from 'react';
import LandingPage from './pages/LandingPage.js';
import ServicePage from './pages/ServicePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import { AuthProvider } from './backend/AuthProvider.js';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}
