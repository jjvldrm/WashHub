import React, { useState } from 'react'
import Header from '../components/Header'
import ServiceTitle from '../components/ServicePageComponents/ServiceTitle'
import { Button } from 'react-bootstrap';
import ServicePanel from '../components/ServicePageComponents/ServicePanel';

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceList = [
    { name: "Professional Carwash and Auto Detailing", price: "Php 100", address: "Malolos, Bulacan", service: 2, tags: ["Underwash", "Carwash",  "Ceramic Coating", "Undercoating", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "DOLFZ Carwash", price: "Php 500", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Waxing"] },
    { name: "Platinum Carwash", price: "Php 500", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing"] },
    { name: "Pitwork Carwash & Auto Detailing", price: "Php 200", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "KM3 Carwash & Auto Detailing", price: "Php 300", address: "Malolos, Bulacan", service: 2, tags: ["Underwash", "Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
    { name: "G-Shine Carwash & Auto Detailing", price: "Php 700", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Ceramic Coating", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
    { name: "Royal Wash Carwash & Auto Detailing", price: "Php 100", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "Buzzworks Carwash & Auto Detailing", price: "Php 200", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Sanitation", "Waxing"] },
    { name: "SFREN Carwash", price: "Php 200", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Interior Detailing", "Exterior Detailing", "Engine Wash", "Waxing"] },
    { name: "Guinhawa Carwash", price: "Php 200", address: "Malolos, Bulacan", service: 2, tags: ["Carwash", "Exterior Detailing", "Engine Wash", "Waxing", "Asphalt Removal"] },
  ];

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
      
      <div className='d-flex justify-content-center mx-5 gap-3 mt-5'>
        <Button onClick={() => setSelectedService(null)}>Show All</Button>
        <Button onClick={() => setSelectedService("Carwash")}>Car Wash</Button>
        <Button onClick={() => setSelectedService("Ceramic Coating")}>Ceramic Coating</Button>
        <Button onClick={() => setSelectedService("Undercoating")}>Undercoating</Button>
        <Button onClick={() => setSelectedService("Interior Detailing")}>Interior Detailing</Button>
        <Button onClick={() => setSelectedService("Exterior Detailing")}>Exterior Detailing</Button>
        <Button onClick={() => setSelectedService("Engine Wash")}>Engine Wash</Button>
        <Button onClick={() => setSelectedService("Sanitation")}>Sanitation</Button>
        <Button onClick={() => setSelectedService("Waxing")}>Waxing</Button>
        <Button onClick={() => setSelectedService("Asphalt Removal")}>Asphalt Removal</Button>
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
