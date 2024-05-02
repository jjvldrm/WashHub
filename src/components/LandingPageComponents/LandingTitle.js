import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function LandingTitle() {
    const [isHovered, setIsHovered] = useState(false);
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    return (
        <div className='LandingPage'>
            <div className='container text-white text-center fs-2 fw-normal'>
                <span class="line-before-after" style={{ letterSpacing: '8px' }}>
                    WASH HUB
                </span>
            </div>
            <div className='text-white text-center fs-1 fw-semibold my-5'>
                Make Washing More Convenient
            </div>
            <div className='text-center'>
                <Button variant="primary" className='rounded-5 fw-semibold fs-4 px-4 py-2'>
                    Book Now
                </Button>
            </div>
            <div className='text-center rounded-5 p-3'
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)",
                    transition: "background-color 0.3s ease"
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleScroll}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
        </div>
    )
}
