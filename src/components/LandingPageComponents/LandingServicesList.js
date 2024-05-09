import React, { useState } from 'react';
import carwashImage from '../../assets/carwashService.jpg';
import ceramicCoatingService from '../../assets/ceramicCoatingService.jpg';
import undercoatingService from '../../assets/undercoatingService.jpg';
import interiorDetailingService from '../../assets/interiorDetailingService.jpg';
import exteriorDetailingService from '../../assets/exteriorDetailingService.jpg';
import engineWashService from '../../assets/engineWashService.jpg';
import disinfectionSanitationService from '../../assets/disinfectionSanitationService.jpg';
import waxingService from '../../assets/waxingService.jpg';
import asphaltRemovalService from '../../assets/asphaltRemovalService.jpg';
import { Col, Row } from 'react-bootstrap';
import CarwashIcon from '../SVGIcons/CarwashIcon';
import CeramicCoatingIcon from '../SVGIcons/CeramicCoatingIcon';
import UndercoatingIcon from '../SVGIcons/UndercoatingIcon';
import InteriorDetailingIcon from '../SVGIcons/InteriorDetailingIcon';
import ExteriorDetailingIcon from '../SVGIcons/ExteriorDetailingIcon';
import EngineWashIcon from '../SVGIcons/EngineWashIcon';
import SanitationIcon from '../SVGIcons/SanitationIcon';
import WaxingIcon from '../SVGIcons/WaxingIcon';
import AsphaltRemovalIcon from '../SVGIcons/AsphaltRemovalIcon';

export default function LandingServicesList() {
    const [activeTab, setActiveTab] = useState('nav-carwash');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        const element = document.getElementById('nav-tab');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <div>
            <div className='text-center fs-2 fw-light my-5' id='above-nav-tab'>
                WASHING SERVICES
            </div>
            <div className='mx-1'>

                <nav>
                    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                        <button className={`nav-link ${activeTab === 'nav-carwash' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-carwash-tab" data-bs-toggle="tab" data-bs-target="#nav-carwash" type="button" role="tab" aria-controls="nav-carwash" aria-selected={activeTab === 'nav-carwash'} onClick={() => handleTabClick('nav-carwash')}>
                            <CarwashIcon color={activeTab === 'nav-carwash' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Car Wash
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-ceramicCoating' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-ceramicCoating-tab" data-bs-toggle="tab" data-bs-target="#nav-ceramicCoating" type="button" role="tab" aria-controls="nav-ceramicCoating" aria-selected={activeTab === 'nav-ceramicCoating'} onClick={() => handleTabClick('nav-ceramicCoating')}>
                            <CeramicCoatingIcon color={activeTab === 'nav-ceramicCoating' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Ceramic Coating
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-undercoating' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-undercoating-tab" data-bs-toggle="tab" data-bs-target="#nav-undercoating" type="button" role="tab" aria-controls="nav-undercoating" aria-selected={activeTab === 'nav-undercoating'} onClick={() => handleTabClick('nav-undercoating')}>
                            <UndercoatingIcon color={activeTab === 'nav-undercoating' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Undercoating
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-interiorDetailing' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-interiorDetailing-tab" data-bs-toggle="tab" data-bs-target="#nav-interiorDetailing" type="button" role="tab" aria-controls="nav-interiorDetailing" aria-selected={activeTab === 'nav-interiorDetailing'} onClick={() => handleTabClick('nav-interiorDetailing')}>
                            <InteriorDetailingIcon color={activeTab === 'nav-interiorDetailing' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Interior Detailing
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-exteriorDetailing' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-exteriorDetailing-tab" data-bs-toggle="tab" data-bs-target="#nav-exteriorDetailing" type="button" role="tab" aria-controls="nav-exteriorDetailing" aria-selected={activeTab === 'nav-exteriorDetailing'} onClick={() => handleTabClick('nav-exteriorDetailing')}>
                            <ExteriorDetailingIcon color={activeTab === 'nav-exteriorDetailing' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Exterior Detailing
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-engineWash' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-engineWash-tab" data-bs-toggle="tab" data-bs-target="#nav-engineWash" type="button" role="tab" aria-controls="nav-engineWash" aria-selected={activeTab === 'nav-engineWash'} onClick={() => handleTabClick('nav-engineWash')}>
                            <EngineWashIcon color={activeTab === 'nav-engineWash' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Engine Wash
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-sanitation' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-sanitation-tab" data-bs-toggle="tab" data-bs-target="#nav-sanitation" type="button" role="tab" aria-controls="nav-sanitation" aria-selected={activeTab === 'nav-sanitation'} onClick={() => handleTabClick('nav-sanitation')}>
                            <SanitationIcon color={activeTab === 'nav-sanitation' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Sanitation
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-waxing' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-waxing-tab" data-bs-toggle="tab" data-bs-target="#nav-waxing" type="button" role="tab" aria-controls="nav-waxing" aria-selected={activeTab === 'nav-waxing'} onClick={() => handleTabClick('nav-waxing')}>
                            <WaxingIcon color={activeTab === 'nav-waxing' ? 'blue' : 'black'} />
                            <div className='mt-1'>
                                Waxing
                            </div>
                        </button>
                        <button className={`nav-link ${activeTab === 'nav-asphaltRemoval' ? 'active text-primary' : 'text-black'}`} style={{ width: '160px' }} id="nav-asphaltRemoval-tab" data-bs-toggle="tab" data-bs-target="#nav-asphaltRemoval" type="button" role="tab" aria-controls="nav-asphaltRemoval" aria-selected={activeTab === 'nav-asphaltRemoval'} onClick={() => handleTabClick('nav-asphaltRemoval')}>
                            <AsphaltRemovalIcon color={activeTab === 'nav-asphaltRemoval' ? 'blue' : 'black'} />
                            <div className='mt-1'>
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
                                        <p className='fs-4'>&emsp;&emsp;A car wash service provides comprehensive cleaning and maintenance for vehicles, addressing exterior and interior needs. Using specialized equipment and cleaning agents, it removes dirt and grime while protecting the paint. Internally, vacuuming and surface wiping ensure cleanliness, with additional options like shampooing and protective treatments available for thorough interior care.</p>
                                       
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
                                        <p className='fs-4'>&emsp;&emsp;Our ceramic coating service offers a premium protective layer for your vehicle's exterior. Applied as a liquid polymer, it forms a glossy, transparent shield against scratches, UV damage, and contaminants. Its hydrophobic properties repel water, dirt, and grime, simplifying cleaning. Enhance your vehicle's appearance and longevity with our ceramic coating, providing lasting shine and superior protection for years.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our undercoating service provides vital protection for your vehicle's underside, forming a durable barrier against moisture, salt, and road debris to prevent rust and corrosion. By sealing vulnerable areas, it extends the lifespan of your vehicle's frame and components, ensuring long-term reliability and safety. Trust our expert team for comprehensive undercoating protection, preserving your vehicle's value in harsh conditions.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our interior detailing service ensures a fresh and comfortable driving experience by meticulously cleaning and sanitizing all surfaces, including upholstery, carpets, and the dashboard. With specialized techniques, we remove dirt, stains, and odors, restoring your vehicle's interior to a like-new condition. From vacuuming to thorough surface wiping, our attention to detail guarantees unmatched quality and a welcoming environment for your vehicle.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our exterior detailing service provides top-notch care and protection for your vehicle's outer surfaces, ensuring a stunning appearance. Using advanced techniques and premium products, we clean, polish, and protect every inch, removing dirt and imperfections. From hand washing to paint correction and wax application, our service enhances shine and provides long-lasting protection. Trust our expert team for exceptional results.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our engine wash service offers thorough cleaning and maintenance for your vehicle's engine. Using specialized equipment and techniques, we remove dirt and grime safely, preserving sensitive components. This process enhances both appearance and functionality, ensuring optimal performance and longevity. Trust our expert team to deliver exceptional results, leaving your engine bay looking pristine and performing at its best.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-sanitation" role="tabpanel" aria-labelledby="nav-sanitation-tab">
                        <div className='container'>
                            <Row>
                                <Col md={6}>
                                    <img src={disinfectionSanitationService} alt="Sanitation Service" className='w-100' />
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <h2>Sanitation</h2>
                                        <p className='fs-4'>&emsp;&emsp;Introducing our vehicle disinfection service, utilizing state-of-the-art fogging technology for thorough sanitization. Our eco-friendly disinfectant mist reaches inaccessible areas, eliminating harmful bacteria, viruses, and allergens. Safe for passengers and materials, it ensures a healthier environment. Experience the power of our fogging service for a hygienic sanctuary inside your vehicle.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Introducing our vehicle waxing service, enhancing both appearance and protection. With premium products and skilled techniques, we provide meticulous application for a glossy finish. This service forms a protective barrier against contaminants, UV rays, and scratches. Experience the transformative power of our waxing, delivering showroom-worthy shine and long-lasting protection.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Introducing our asphalt removal service, restoring your vehicle's exterior surfaces to pristine condition. Using specialized techniques and equipment, we eliminate stubborn asphalt residue, tar, and road grime from paintwork, glass, and trim without causing damage. Experience the difference with our meticulous process, rejuvenating your vehicle's appearance.</p>
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
