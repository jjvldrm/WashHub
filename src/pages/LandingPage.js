import React, { useEffect, useState } from 'react';
import LandingTitle from '../components/LandingPageComponents/LandingTitle';
import Header from '../components/Header.js';
import LandingServicesList from '../components/LandingPageComponents/LandingServicesList.js';

export default function LandingPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fade in to true after component mounts
    setFadeIn(true);
  }, []);

  return (
    <div className='vh-100 w-100 flex-column justify-content-center landingPage-bg-with-image' style={{ opacity: fadeIn ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      <div className='bg-black bg-opacity-10'>
        <Header />
      </div>

      <div className='d-flex flex-column justify-content-center' style={{ height: 'calc(100% - 75px)', transform: `translateY(${fadeIn ? 0 : '-20px'})`, transition: 'transform 0.5s ease-in-out' }}>
        <LandingTitle />
      </div>

      <LandingServicesList />
      <footer className='bg-black bg-opacity-10 h-100 py-5 mt-5'>
        &nbsp;
      </footer>
    </div>
  );
}
