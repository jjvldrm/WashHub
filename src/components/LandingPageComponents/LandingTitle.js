import React from 'react';
import { Button } from 'react-bootstrap';

export default function LandingTitle() {
    return (
        <div className='LandingPage'>
            <div className='container text-white text-center fs-2 fw-light'>
                WASH HUB
            </div>
            <div className='text-white text-center fs-1 fw-semibold my-3'>
                Make Washing More Convenient
            </div>
            <div className='text-center'>
                <Button variant="secondary" className='rounded-5 fw-semibold fs-4 px-4 py-2'>
                    Book Now
                </Button>
            </div>
        </div>
    )
}
