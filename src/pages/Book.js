import React from 'react';
import '../components/Book/Book.css';
import BookPanel from '../components/BookPanel';

export default function Book() {
    return (
        <section className='m-5'>
            <h1 className="mb-4 fw-medium text-center">
                Book Now
            </h1>

            <div className="book__container grid">
                <BookPanel />
                <BookPanel />

                <div className="book__content">
                    <img src="#" alt="Service 2" className="book__image" />
                    <div className="book__title">
                        Service 2
                    </div>
                    <div className="book__contents">
                        <div className="book__contents">
                            <div>
                                1 hr
                            </div>
                            <div>
                                Php1,000
                            </div>
                        </div>
                    </div>
                    <button>Book Now</button>
                </div>

                <div className="book__content">
                    <img src="#" alt="Service 3" className="book__image" />
                    <div className="book__title">
                        Service 3
                    </div>
                    <div className="book__contents">
                        <div className="book__contents">
                            <div>
                                1 hr
                            </div>
                            <div>
                                Php700
                            </div>
                        </div>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </section>
    )
}
