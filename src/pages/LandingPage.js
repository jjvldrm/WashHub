import React from 'react';
import LandingTitle from '../components/LandingPageComponents/LandingTitle';
import Header from '../components/Header.js';
import LandingServicesList from '../components/LandingPageComponents/LandingServicesList.js';

export default function LandingPage() {
  return (
    <div>
      <div className='vh-100 w-100 flex-column justify-content-center bg-with-image'>
        <Header />
        <div>
          <LandingTitle />
        </div>
      </div>
      <LandingServicesList />
    </div>
  );
}
