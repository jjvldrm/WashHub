import React from 'react';
import carwashImage from '../../assets/carwashService.jpg';
import carwashIcon from '../../assets/carwashIcon.png';

import ceramicCoatingService from '../../assets/ceramicCoatingService.jpg';
import ceramicCoatingIcon from '../../assets/ceramicCoatingIcon.png';

import undercoatingService from '../../assets/undercoatingService.jpg';
import undercoatingIcon from '../../assets/undercoatingIcon.png';

import interiorDetailingService from '../../assets/interiorDetailingService.jpg';
import interiorDetailingIcon from '../../assets/interiorDetailingIcon.png';

import exteriorDetailingService from '../../assets/exteriorDetailingService.jpg';
import exteriorDetailingIcon from '../../assets/exteriorDetailingIcon.png';

import engineWashService from '../../assets/engineWashService.jpg';
import engineWashIcon from '../../assets/engineWashIcon.png';

import disinfectionSanitationService from '../../assets/disinfectionSanitationService.jpg';
import disinfectionSanitationIcon from '../../assets/disinfectionSanitationIcon.png';

import waxingService from '../../assets/waxingService.jpg';
import waxingIcon from '../../assets/waxingIcon.png';

import asphaltRemovalService from '../../assets/asphaltRemovalService.jpg';
import asphaltRemovalIcon from '../../assets/asphaltRemovalIcon.png';
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
                            <img src={carwashIcon} width={"50px"} />
                            <div>
                                Car Wash
                            </div>
                        </button>
                        <button class="nav-link" id="nav-ceramicCoating-tab" data-bs-toggle="tab" data-bs-target="#nav-ceramicCoating" type="button" role="tab" aria-controls="nav-ceramicCoating" aria-selected="false">
                            <img src={ceramicCoatingIcon} width={"50px"} />
                            <div>
                                Ceramic Coating
                            </div>
                        </button>
                        <button class="nav-link" id="nav-undercoating-tab" data-bs-toggle="tab" data-bs-target="#nav-undercoating" type="button" role="tab" aria-controls="nav-undercoating" aria-selected="false">
                            <img src={undercoatingIcon} width={"50px"} />
                            <div>
                                Undercoating
                            </div>
                        </button>
                        <button class="nav-link" id="nav-interiorDetailing-tab" data-bs-toggle="tab" data-bs-target="#nav-interiorDetailing" type="button" role="tab" aria-controls="nav-interiorDetailing" aria-selected="false">
                            <img src={interiorDetailingIcon} width={"50px"} />
                            <div>
                                Interior Detailing
                            </div>
                        </button>
                        <button class="nav-link" id="nav-exteriorDetailing-tab" data-bs-toggle="tab" data-bs-target="#nav-exteriorDetailing" type="button" role="tab" aria-controls="nav-exteriorDetailing" aria-selected="false">
                            <img src={exteriorDetailingIcon} width={"50px"} />
                            <div>
                                Exterior Detailing
                            </div>
                        </button>
                        <button class="nav-link" id="nav-engineWash-tab" data-bs-toggle="tab" data-bs-target="#nav-engineWash" type="button" role="tab" aria-controls="nav-engineWash" aria-selected="false">
                            <img src={engineWashIcon} width={"50px"} />
                            <div>
                                Engine Wash
                            </div>
                        </button>
                        <button class="nav-link" id="nav-disinfectionSanitation-tab" data-bs-toggle="tab" data-bs-target="#nav-disinfectionSanitation" type="button" role="tab" aria-controls="nav-disinfectionSanitation" aria-selected="false">
                            <img src={disinfectionSanitationIcon} width={"50px"} />
                            <div>
                                Disinfection/Sanitation
                            </div>
                        </button>
                        <button class="nav-link" id="nav-waxing-tab" data-bs-toggle="tab" data-bs-target="#nav-waxing" type="button" role="tab" aria-controls="nav-waxing" aria-selected="false">
                            <img src={waxingIcon} width={"50px"} />
                            <div>
                                Waxing
                            </div>
                        </button>
                        <button class="nav-link" id="nav-asphaltRemoval-tab" data-bs-toggle="tab" data-bs-target="#nav-asphaltRemoval" type="button" role="tab" aria-controls="nav-asphaltRemoval" aria-selected="false">
                            <img src={asphaltRemovalIcon} width={"50px"} />
                            <div>
                                Asphalt Removal
                            </div>
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
                    <div class="tab-pane fade" id="nav-ceramicCoating" role="tabpanel" aria-labelledby="nav-ceramicCoating-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={ceramicCoatingService} alt="Ceramic Coating Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Ceramic Coating</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-undercoating" role="tabpanel" aria-labelledby="nav-undercoating-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={undercoatingService} alt="Undercoating Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Undercoating</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-interiorDetailing" role="tabpanel" aria-labelledby="nav-interiorDetailing-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={interiorDetailingService} alt="Interior Detailing Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Interior Detailing</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-exteriorDetailing" role="tabpanel" aria-labelledby="nav-exteriorDetailing-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={exteriorDetailingService} alt="Exterior Detailing Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Exterior Detailing</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-engineWash" role="tabpanel" aria-labelledby="nav-engineWash-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={engineWashService} alt="Engine Wash Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Engine Wash</h2>
                                        <p>Description</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-disinfectionSanitation" role="tabpanel" aria-labelledby="nav-disinfectionSanitation-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={disinfectionSanitationService} alt="Disinfection Sanitation Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Disinfection/Sanitation</h2>
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
                                    <img src={waxingService} alt="Waxing Service" className='w-100' />
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
                    <div class="tab-pane fade" id="nav-asphaltRemoval" role="tabpanel" aria-labelledby="nav-asphaltRemoval-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={asphaltRemovalService} alt="Asphalt Removal Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Asphalt Removal</h2>
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
