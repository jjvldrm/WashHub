import React from 'react';
import './Book.css';

const Book = () => {
    return (
        <section className='book section'>
            <div>
                <h1>Our Services</h1>
            </div>

            <div className="book__container grid">
                <div className="book__content">
                    <img src="#" alt="Service 1" className="book__image" />
                    <div className="book__title">
                        Service 1
                    </div>
                    <div className="book__contents">
                        <div>
                            1 hr
                        </div>
                        <div>
                            Php500
                        </div>
                    </div>
                    <button>Book Now</button>
                </div>

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

export default Book;
