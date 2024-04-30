import React from 'react';
import LandingPage from './pages/LandingPage';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default function App() {
  return (
    <div className='bg-primary h-100 bg-with-image'>
      <Header />
      <LandingPage />
    </div>
  );
}
