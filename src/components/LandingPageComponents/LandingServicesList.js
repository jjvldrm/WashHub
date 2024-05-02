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
    };
    return (
        <div>
            <div className='text-center fs-2 fw-light my-5 '>
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
                                        <p className='fs-4'>&emsp;&emsp;A car wash service provides comprehensive cleaning and maintenance solutions for vehicles, catering to both exterior and interior needs. Utilizing specialized equipment like high-pressure hoses and cleaning agents, the service efficiently removes dirt, grime, and debris from the vehicle's surface, ensuring a pristine exterior appearance while also safeguarding the paint and finish from potential damage.</p>
                                        <p className='fs-4'>&emsp;&emsp;Internally, the service offers thorough vacuuming to eliminate dirt and debris from carpets and upholstery, complemented by meticulous surface wiping to eradicate dust and spills. For more extensive interior care, options such as carpet and upholstery shampooing or protective treatments are also available.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our ceramic coating service provides a premium protective layer for your vehicle's exterior surfaces. Applied as a liquid polymer and cured to form a transparent shield, this coating offers a glossy finish while safeguarding against scratches, UV damage, and environmental contaminants. With its hydrophobic properties, water, dirt, and grime simply bead off, ensuring easier cleaning and maintenance. Enhance the appearance and longevity of your vehicle with our ceramic coating service, providing lasting shine and superior protection for years to come.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our undercoating service offers essential protection for the underside of your vehicle. Applied as a durable coating, it forms a barrier against moisture, salt, and road debris, safeguarding against rust and corrosion. By sealing vulnerable areas, our undercoating service helps extend the lifespan of your vehicle's frame and components, ensuring long-term reliability and safety on the road. Trust our expert team to provide comprehensive undercoating protection, keeping your vehicle resilient against harsh driving conditions and preserving its value for years to come.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our interior detailing service revitalizes the inside of your vehicle, ensuring a clean and comfortable driving experience. Using specialized techniques and products, we meticulously clean and sanitize all surfaces, including upholstery, carpets, and dashboard, removing dirt, stains, and odors. From vacuuming and shampooing to thorough surface wiping, our detailing service restores your vehicle's interior to a like-new condition, leaving it fresh, hygienic, and inviting. Experience the transformation with our interior detailing service, where attention to detail meets unmatched quality, ensuring your vehicle's interior looks and feels its best.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our exterior detailing service delivers unparalleled care and protection for your vehicle's outer surfaces, ensuring a stunning and well-maintained appearance. Using cutting-edge techniques and premium products, we meticulously clean, polish, and protect every inch of your vehicle's exterior, removing dirt, contaminants, and imperfections. From hand washing and clay bar treatment to paint correction and wax application, our detailing service enhances the shine and clarity of your vehicle's paint while providing long-lasting protection against the elements. Trust our expert team to deliver exceptional results with our exterior detailing service, ensuring your vehicle stands out with a flawless finish and unparalleled protection against environmental hazards.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Our engine wash service provides comprehensive cleaning and maintenance for the heart of your vehicle. Utilizing specialized equipment and industry-leading techniques, we safely remove dirt, grease, and grime from your engine bay, restoring its appearance and functionality. Our meticulous process ensures that sensitive components are protected throughout the cleaning process, preserving performance and reliability. Experience the benefits of a clean and well-maintained engine with our engine wash service, enhancing both the aesthetics and longevity of your vehicle's vital components. Trust our expert team to deliver exceptional results, leaving your engine bay looking pristine and performing at its best.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Introducing our vehicle disinfection service, utilizing state-of-the-art fogging technology to ensure a thorough and effective sanitization process. By dispersing a fine mist of disinfectant throughout the interior cabin, we reach even the most inaccessible areas, eliminating harmful bacteria, viruses, and allergens. Our eco-friendly disinfectant is safe for both passengers and vehicle materials, providing peace of mind and a healthier environment for everyone on board. Experience the power of our fogging disinfection service, where safety and cleanliness converge to create a hygienic sanctuary inside your vehicle. Trust our expert team to deliver exceptional results, leaving your vehicle's interior fresh, sanitized, and ready for your next journey.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Introducing our vehicle waxing service, designed to elevate the appearance and protection of your vehicle's exterior surfaces. Using premium wax products and skilled techniques, we provide a meticulous application process that enhances the shine and depth of your vehicle's paintwork. Our waxing service not only creates a stunning glossy finish but also forms a protective barrier against environmental contaminants, UV rays, and minor scratches. Experience the transformative power of our waxing service, where each application brings out the brilliance of your vehicle's finish and ensures long-lasting protection against the elements. Trust our expert team to deliver exceptional results, leaving your vehicle with a showroom-worthy shine that turns heads wherever you go.</p>
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
                                        <p className='fs-4'>&emsp;&emsp;Introducing our asphalt removal service, dedicated to restoring the pristine condition of your vehicle's exterior surfaces. Using specialized techniques and equipment, we effectively eliminate stubborn asphalt residue, tar, and road grime from your vehicle's paintwork, glass, and trim. Our meticulous process ensures thorough removal without causing any damage to your vehicle's finish, leaving it clean and free from unsightly blemishes. Experience the difference with our asphalt removal service, where attention to detail and expertise combine to rejuvenate your vehicle's appearance and maintain its pristine condition. Trust our skilled team to deliver exceptional results, ensuring your vehicle looks its best and stands out on the road.</p>
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
