import React, { useState } from 'react';
import "./Book/Book.css";

export default function BookPanel() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
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
    )
}
