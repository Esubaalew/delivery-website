// src/components/ServiceCard.js
import React from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="service-card">
      <img src={imageSrc} alt={title} />
      <div className="card-details">
       
        <p>{description}</p>
      </div>
      <ServiceDetails title={title} />
    </div>
  );
};

export default ServiceCard;
