import React from 'react';
import LandingTitle from '../components/LandingPageComponents/LandingTitle';
import Header from '../components/Header.js';
import LandingServicesList from '../components/LandingPageComponents/LandingServicesList.js';

export default function LandingPage() {
  return (
    <div className='mb-5'>
      <div className='vh-100 w-100 flex-column justify-content-center landingPage-bg-with-image'>
        <div className='bg-black bg-opacity-10'>
        <Header />
        </div>
        
        <div className='d-flex flex-column justify-content-center '  style={{height: 'calc(100% - 75px)'}}>
          <LandingTitle />
        </div>
      </div>
      <LandingServicesList />
    </div>
  );
}
