import React from 'react';
import LandingPage from './pages/LandingPage.js';
import ServicePage from './pages/ServicePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './backend/AuthProvider.js';
import SchedulePage from './pages/SchedulePage.js';
import BookingPage from './pages/BookingPage.js';
import LoginPage from './pages/LoginPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import AuthDetails from './pages/AuthDetails.js';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/authDetails" element={<AuthDetails />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}
