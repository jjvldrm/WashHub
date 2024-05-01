import React from 'react';
import carwashImage from '../../assets/carwashService.jpg';
import carwashIcone from '../../assets/carwashIcon.png';
import detailingImage from '../../assets/detailingService.jpg';
import detailingIcon from '../../assets/detailingIcon.png';
import buffingImage from '../../assets/buffingService.jpg';
import waxingImage from '../../assets/waxingService.jpg';
import deepCleanImage from '../../assets/deepCleanService.jpg';
import { Col, Row } from 'react-bootstrap';

export default function LandingServicesList() {
    return (
        <div>
            <div className='text-center fs-2 fw-light my-5 '>
                WASHING SERVICES
            </div>
            <div className='mx-5'>

                <nav>
                    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-carwash-tab" data-bs-toggle="tab" data-bs-target="#nav-carwash" type="button" role="tab" aria-controls="nav-carwash" aria-selected="true">
                            <img src={carwashIcone} width={"50px"} />
                            <div>
                                Car Wash
                            </div>
                        </button>
                        <button class="nav-link" id="nav-detailing-tab" data-bs-toggle="tab" data-bs-target="#nav-detailing" type="button" role="tab" aria-controls="nav-detailing" aria-selected="false">
                            <img src={detailingIcon} width={"50px"} />
                            <div>
                                Detailing
                            </div>
                        </button>
                        <button class="nav-link" id="nav-buffing-tab" data-bs-toggle="tab" data-bs-target="#nav-buffing" type="button" role="tab" aria-controls="nav-buffing" aria-selected="false">
                            Buffing
                        </button>
                        <button class="nav-link" id="nav-waxing-tab" data-bs-toggle="tab" data-bs-target="#nav-waxing" type="button" role="tab" aria-controls="nav-waxing" aria-selected="false">
                            Waxing
                        </button>
                        <button class="nav-link" id="nav-deepclean-tab" data-bs-toggle="tab" data-bs-target="#nav-deepclean" type="button" role="tab" aria-controls="nav-deepclean" aria-selected="false">
                            Deep Clean
                        </button>
                    </div>
                </nav>

                <div class="tab-content mt-5" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-carwash" role="tabpanel" aria-labelledby="nav-carwash-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={carwashImage} alt="Car Wash Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Carwash</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-detailing" role="tabpanel" aria-labelledby="nav-detailing-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={detailingImage} alt="Detailing Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Detailing</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-buffing" role="tabpanel" aria-labelledby="nav-buffing-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={buffingImage} alt="Buffing Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Buffing</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-waxing" role="tabpanel" aria-labelledby="nav-waxing-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={waxingImage} alt="Waxing Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Waxing</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-deepclean" role="tabpanel" aria-labelledby="nav-deepclean-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={deepCleanImage} alt="Deep Clean Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Deep Clean</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
