import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BookingTitle from '../components/BookingPageComponents/BookingTitle';
import { Col, Row } from 'react-bootstrap';
import { auth, firestore } from '../backend/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userEmail = auth.currentUser.email;

        const q = query(collection(firestore, 'bookings'), where('userEmail', '==', userEmail));

        const querySnapshot = await getDocs(q);
        
        const bookingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          date: doc.data().date,
          time: doc.data().time,
          selectedTags: doc.data().selectedTags,
        }));

        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <div className="bookPage-bg-with-image">
        <div className="bg-black bg-opacity-10">
          <Header />
        </div>
        <BookingTitle />
        <hr />
      </div>
      <div className="container border border-subtle rounded-4">
        <Row className="bg-secondary bg-opacity-10 border-bottom p-2 text-center">
          <Col>Carwash Name</Col>
          <Col>Location</Col>
          <Col>Appointment Date</Col>
          <Col>Appointment Time</Col>
          <Col>Services</Col>
        </Row>

        {bookings.map((booking) => (
          <Row key={booking.id} className="text-center p-2">
            <Col>{booking.name}</Col>
            <Col>{booking.address}</Col>
            <Col>{booking.date}</Col>
            <Col>{booking.time}</Col>
            <Col>{booking.selectedTags.join(', ')}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
