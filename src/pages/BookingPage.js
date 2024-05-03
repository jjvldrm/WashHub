import React from 'react';
import Header from '../components/Header';
import BookingTitle from '../components/BookingPageComponents/BookingTitle';

export default function BookingPage() {
  return (
    <div>
      <div className='servicePage-bg-with-image'>
        <div className='bg-black bg-opacity-10'>
          <Header />
        </div>
        <BookingTitle />
        <hr />
      </div>
    </div>
  )
}
