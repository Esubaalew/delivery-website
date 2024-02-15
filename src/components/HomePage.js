// src/components/HomePage.js
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import WhoWeAre from './WhoWeAre';

const HomePage = () => {
  const services = [
    {
      title: 'Sheep',
      description: 'Adorable sheep surprises for any occasion',
    },
    {
      title: 'Cake',
      description: 'Delicious cakes for celebrations',
    },
    {
      title: 'Surprise',
      description: 'Amazing surprises for your loved ones',
    },
    {
      title: 'Flower',
      description: 'Beautiful bouquets for any occasion',
    },
  ];

  const introduction = {
    title: 'Who We Are',
    description: 'Welcome to KAA Surprise and Delivery! Your source for amazing surprises and swift deliveries.',
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex < services.length - 1 ? prevIndex + 1 : 0));
  };

  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : services.length - 1));
  };

  return (
    <div className="home-page">
      <WhoWeAre {...introduction} />

      <div className="section">
        <h2>What We Do</h2>
        <div className="service-cards-container">
          <button className="nav-button" onClick={showPrevCard}>&lt; Prev</button>
          <ServiceCard key={currentCardIndex} {...services[currentCardIndex]} />
          <button className="nav-button" onClick={showNextCard}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
