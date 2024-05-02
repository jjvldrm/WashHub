import React, { useState } from 'react'
import Header from '../components/Header'
import ServiceTitle from '../components/ServicePageComponents/ServiceTitle'
import { Button } from 'react-bootstrap';
import ServicePanel from '../components/ServicePageComponents/ServicePanel';

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceList = [
    { name: "Professional Carwash and Auto Detailing", price: "Php 100", address: "RRPF+C3M, Diversion Road, Malolos, Bulacan", service: 0, tags: ["Underwash", "Carwash", "Ceramic Coating", "Undercoating", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "DOLFZ Carwash", price: "Php 500", address: "112 A Mabini, Malolos, Central Luzon", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Waxing"] },
    { name: "Platinum Carwash", price: "Php 500", address: "53 Blas Ople Diversion Rd., Malolos, Central Luzon", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing"] },
    { name: "Pitwork Carwash & Auto Detailing", price: "Php 200", address: "VR56+P2C, MacArthur Hwy, Malolos, 3000 Bulacan", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "KM3 Carwash & Auto Detailing", price: "Php 300", address: "1801 MacArthur Hwy, Malolos, Bulacan", service: 0, tags: ["Underwash", "Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
    { name: "G-Shine Carwash & Auto Detailing", price: "Php 700", address: "43 3000 MacArthur Hwy, Malolos, Bulacan", service: 0, tags: ["Carwash", "Interior Detailing", "Ceramic Coating", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
    { name: "Royal Wash Carwash & Auto Detailing", price: "Php 100", address: "931, Malolos, 3000 Bulacan", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "Central Carwash Malolos City", price: "Php 200", address: "AI Bldg, MacArthur Hwy, Malolos, 3000 Bulacan", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Sanitation", "Waxing"] },
    { name: "SFREN Carwash", price: "Php 200", address: "A Mabini, Malolos, Bulacan", service: 0, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "Guinhawa Carwash", price: "Php 200", address: "VR39+433, Malolos, Bulacan", service: 0, tags: ["Carwash", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
  ];

  serviceList.forEach(service => {
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

  const filteredServiceList = selectedService ? serviceList.filter(service => service.tags.includes(selectedService)) : serviceList;

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
              name={service.name}
              price={service.price}
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
