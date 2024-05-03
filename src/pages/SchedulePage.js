import React from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import ScheduleTitle from '../components/SchedulePageComponents/ScheduleTitle';

function SchedulePage() {
    const { name, price, address, service, tags } = JSON.parse(localStorage.getItem('serviceDetails'));

    return (
        <div>
            <div className='servicePage-bg-with-image'>
                <div className='bg-black bg-opacity-10'>
                    <Header />
                </div>
            </div>
            <div className='container mt-5'>
                <Row>
                <Col md={5}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4586.129090419224!2d120.81590357928437!3d14.855562067702216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7324f0f857%3A0xc21f39ed5b256ece!2sBulacan%20State%20University!5e0!3m2!1sen!2sph!4v1714695892771!5m2!1sen!2sph"
                        width="100%"
                        height="500"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </Col>
                <Col md={7}>
                    <h1>{name}</h1>
                    <p>Address: {address}</p>
                    <p>Service/s: {service}</p>
                    <p>Tags: 
                        {tags.map((tag, index) => (
                            <span key={index} className='badge bg-primary-subtle ms-2 mb-2 text-black fw-normal py-2 px-3'>{tag}</span>
                        ))}
                    </p>
                </Col>
                </Row>
            </div>
        </div>
    );
}

export default SchedulePage;
