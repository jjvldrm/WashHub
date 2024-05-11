import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import myimage from '../../assets/deal-03.jpg';
import { Link } from 'react-router-dom';

export default function ServicePanel({ image, name, location, address, service, tags }) {

    const handleScheduleVisit = () => {
        localStorage.setItem('serviceDetails', JSON.stringify({ name, location, address, service, tags }));
    };

    return (
        <div className='bg-secondary bg-opacity-10 rounded-3 p-4' style={{ width: '400px' }}>
            <img src={image} className='w-100 rounded-3 mb-3 text-center' alt="Service" />
            <div style={{ height: '200px' }}>
                <div className='fw-semibold px-3 py-1 d-inline-block bg-opacity-50 bg-primary rounded-3'>
                    {name}
                </div>
                <Row className='mt-2'>
                    <Col>
                        <div className='text-start fw-bold'>
                            {address}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='text-start'>
                        Services: {service}
                    </div>
                </Row>
                <Row>
                    <div className='m-2'>
                        {tags.map((tag, index) => (
                            <span key={index} className='badge bg-primary-subtle me-2 mb-2 text-black fw-normal py-2 px-3'>{tag}</span>
                        ))}
                    </div>
                </Row>
            </div>
            <hr />
            <div className='text-center'>
                <Link to={{ pathname: `/schedule` }}>
                    <Button className='rounded-5 px-4' onClick={handleScheduleVisit}>Book an Appointment</Button>
                </Link>
            </div>
        </div>
    )
}