import React, { useState } from 'react';
import "./Services/Services.css";

export default function ServicePanel() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Service <br /> Number 1
                </h3>
            </div>

            <span className="services__button" onClick={() =>
                toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">
                        Service based on learnings and experiences in the University
                        and Internship.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Web page development.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux element interactions.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Design and mockups of products for companies.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
