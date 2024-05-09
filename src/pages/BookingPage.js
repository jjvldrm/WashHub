import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BookingTitle from '../components/BookingPageComponents/BookingTitle';
import { Col, Row } from 'react-bootstrap';
import { auth, firestore } from '../backend/firebase';
import { doc, where, getDocs } from 'firebase/firestore';

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userEmail = auth.currentUser.email;

        const q = doc(firestore, "users", userEmail.userEmail);

        const querySnapshot = await getDocs(q);
        console.log("Document Snapshot:", querySnapshot.data());

        // Map the documents to booking objects
        const userBookings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        // Update state with user's bookings
        setBookings(userBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    // Call the fetchBookings function when component mounts
    fetchBookings();
  }, []);

  return (
    <div>
      <div className='bookPage-bg-with-image'>
        <div className='bg-black bg-opacity-10'>
          <Header />
        </div>
        <BookingTitle />
        <hr />
      </div>
      <div className='container border border-subtle rounded-4'>
        <Row className='bg-secondary bg-opacity-10 border-bottom p-2 text-center'>
          <Col>Carwash Name</Col>
          <Col>Location</Col>
          <Col>Appointment Date</Col>
          <Col>Appointment Time</Col>
          <Col>Services</Col>
        </Row>

        {bookings.map((booking) => (
          <Row key={booking.id} className='text-center p-2'>
            <Col>{booking.name}</Col>
            <Col>{booking.address}</Col>
            <Col>{booking.date}</Col>
            <Col>{booking.time}</Col>
            <Col>{booking.services}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
