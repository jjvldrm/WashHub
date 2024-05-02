import React from 'react';

function SchedulePage({ location }) {
    const { state } = location;
    const { name, price, address, service, tags } = state || {};

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Address: {address}</p>
            <p>Service: {service}</p>
            <p>Tags: {tags && tags.join(", ")}</p>
            {/* Additional schedule page content */}
        </div>
    );
}

export default SchedulePage;
