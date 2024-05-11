import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../backend/firebase';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { firestore } from '../backend/firebase';
import { collection, addDoc } from 'firebase/firestore';

function SchedulePage() {
    const [user, setUser] = useState(null);
    const { name, location, address, service, tags } = JSON.parse(localStorage.getItem('serviceDetails'));
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const toggleTagSelection = (tag) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter(selectedTag => selectedTag !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 20; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                let period = hour < 12 ? 'AM' : 'PM';
                let displayHour = hour <= 12 ? hour : hour - 12;
                if (displayHour === 0) displayHour = 12;
                const time = `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
                options.push({ value: time, label: time });
            }
        }
        return options;
    };

    const handleBookAppointment = () => {
        if (!user) {
            navigate('/login');
        } else {
            setShowModal(true);
        }
    };

    const goBack = () => {
        window.history.back();
    };

    const confirmBooking = () => {
        saveBookingToFirebase().then(() => {
            toast.success('Booking confirmed and saved successfully!');
            setShowModal(false);
        }).catch(error => {
            console.error('Error saving booking:', error);
            toast.error('Failed to save booking. Please try again later.');
        });
    };

    const saveBookingToFirebase = async () => {
        const bookingData = {
            name: name,
            address: address,
            selectedTags: selectedTags,
            date: selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            time: selectedTime,
            userEmail: user ? user.email : null
        };
    
        try {
            await addDoc(collection(firestore, 'bookings'), bookingData);
            console.log("Booking data saved successfully");
            toast.success('Booking confirmed and saved successfully!');
            setShowModal(false);
        } catch (error) {
            console.error("Error saving booking:", error);
            toast.error('Failed to save booking. Please try again later.');
        }
    };
    

    return (
        <div>
            <div className='servicePage-bg-with-image'>
                <div className='bg-black bg-opacity-10'>
                    <Header />
                </div>
            </div>
            <div className='container mt-5'>
                <div className='text-primary fw-semibold d-flex flex-row mb-3'>
                    <i className='bi bi-chevron-left' onClick={goBack} style={{ cursor: 'pointer' }}></i>
                    <div className='ms-1' onClick={goBack} style={{ cursor: 'pointer' }}>
                        Back
                    </div>
                </div>
                <Row>
                    <Col md={5}>
                        <iframe
                            src={location}
                            width="100%"
                            height="500"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            style={{ border: '2px solid #ccc' }}
                        ></iframe>
                    </Col>
                    <Col md={7} className="d-flex flex-column">
                        <div>
                            <h1>{name}</h1>
                            <p>Address: {address}</p>
                            <p>
                                Select your services: selected ({selectedTags.length})
                                <div className='mt-3'>
                                    {tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`badge ms-2 mb-2 text-black py-2 px-3 ${selectedTags.includes(tag)
                                                ? 'bg-primary-subtle fw-semibold'
                                                : 'bg-light fw-normal'
                                                }`}
                                            style={{
                                                cursor: 'pointer',
                                                border: selectedTags.includes(tag)
                                                    ? 'none'
                                                    : '1px solid #ced4da',
                                            }}
                                            onClick={() => toggleTagSelection(tag)}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label htmlFor="date-picker" style={{ marginRight: '10px' }}>Select a Date:</label>
                                <DatePicker
                                    id="date-picker"
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="MMMM d, yyyy"
                                    className="form-control"
                                    style={{ maxWidth: '200px' }}
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label htmlFor="time-select" style={{ marginRight: '10px' }}>Select a time:</label>
                                <select
                                    id="time-select"
                                    className="form-select mt-2"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    style={{ maxWidth: '200px' }}
                                >
                                    {generateTimeOptions().map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='mt-3' style={{ alignSelf: 'flex-end' }}>
                            <Button onClick={handleBookAppointment}> Book an Appointment</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Modal for confirming booking */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to book this appointment?</p>
                    <p>Selected Services: {selectedTags.join(', ')}</p>
                    <p>Date: {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <p>Time: {selectedTime}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmBooking}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SchedulePage;
