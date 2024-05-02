import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import image from '../../assets/deal-03.jpg';

export default function ServicePanel({ name, price, address, service, tags }) {
    return (
        <div className='bg-secondary bg-opacity-10 rounded-3 p-4' style={{ width: '400px' }}>
            <img src={image} className='w-100 rounded-3 mb-3 text-center' alt="Service" />
            <Row>
                <Col className='d-flex justify-content-between' md={8}>
                    <div className='fw-semibold px-3 py-1 d-inline-block bg-opacity-50 bg-primary rounded-3'>
                        {name}
                    </div>
                </Col>
                <Col>
                    <div className='text-primary text-end me-3 fw-bolder'>
                        {price}
                    </div>
                </Col>
            </Row>
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
            <hr />
            <div className='text-center'>
                <Button className='rounded-5 px-4'>Schedule a Visit</Button>
            </div>
        </div>
    )
}
