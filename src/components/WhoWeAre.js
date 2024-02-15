// src/components/WhoWeAre.js
import React from 'react';

const WhoWeAre = ({ title, description }) => {
  return (
    <div className="who-we-are">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default WhoWeAre;
