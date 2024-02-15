// src/components/ServiceDetails.js
import React from 'react';

const ServiceDetails = ({ title }) => {
  const serviceImages = {
    Sheep: '/images/sheep.jpg',
    Cake: '/images/cake.jpg',
    Surprise: '/images/surp.jpg',
    Flower: '/images/flr.jpg',
    // Add more images as needed
  };

  return (
    <div className="service-details">
    
      {title !== 'Introduction' && <img src={serviceImages[title]} alt={`${title} Details`} />}
      <p>{title !== 'Introduction' ? `This is a detailed description of the ${title} service.` : ''}</p>
    </div>
  );
};

export default ServiceDetails;
