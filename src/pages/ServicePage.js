import React, { useState } from 'react'
import Header from '../components/Header'
import ServiceTitle from '../components/ServicePageComponents/ServiceTitle'
import { Button } from 'react-bootstrap';
import ServicePanel from '../components/ServicePageComponents/ServicePanel';
import ServiceList from '../backend/ServiceList';

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);

  ServiceList.forEach(service => {
    service.service = service.tags.length;
  });

  const handleScroll = () => {
    const element = document.getElementById('filtered-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const filteredServiceList = selectedService ? ServiceList.filter(service => service.tags.includes(selectedService)) : ServiceList;

  return (
    <div className='mb-5'>
      <div className='servicePage-bg-with-image'>
        <div className='bg-black bg-opacity-10'>
          <Header />
        </div>
        <ServiceTitle />
        <hr />
      </div>

      <div className='d-flex justify-content-center mx-5 gap-3 mt-5' id='filtered-section'>
        <Button onClick={() => { handleScroll(); setSelectedService(null); }}>Show All</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Carwash"); }}>Car Wash</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Ceramic Coating"); }}>Ceramic Coating</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Undercoating"); }}>Undercoating</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Interior Detailing"); }}>Interior Detailing</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Exterior Detailing"); }}>Exterior Detailing</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Engine Wash"); }}>Engine Wash</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Sanitation"); }}>Sanitation</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Waxing"); }}>Waxing</Button>
        <Button onClick={() => { handleScroll(); setSelectedService("Asphalt Removal"); }}>Asphalt Removal</Button>
      </div>
      <div className='container py-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-4 d-flex justify-content-center'>
          {filteredServiceList.map((service, index) => (
            <ServicePanel
              key={index}
              id={index}
              name={service.name}
              location={service.location}
              address={service.address}
              service={service.service}
              tags={service.tags}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
