import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceList from '../backend/ServiceList';

function SchedulePage() {
    // Access the id parameter from the URL
    const { id } = useParams();

    // Convert the id to a number
    const index = parseInt(id);

    // Get the service from the ServiceList using the index
    const service = ServiceList[index];

    // If the service is found, destructure its details
    const { name, price, address, service: serviceName } = service || {};

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Address: {address}</p>
            <p>Service: {serviceName}</p>
        </div>
    );
}

export default SchedulePage;
