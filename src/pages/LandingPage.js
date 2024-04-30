import React from 'react';
import LandingTitle from '../components/LandingPageComponents/LandingTitle';
import Header from '../components/Header.js';
import LandingServicesList from '../components/LandingPageComponents/LandingServicesList.js';

export default function LandingPage() {
  return (
    <div>
      <div className='h-100 bg-black bg-with-image'>
        <Header />
        <LandingTitle />
      </div>
      <LandingServicesList />
    </div>
  );
}
