import React, { useState } from 'react';
import './Packages.css';

const Packages = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const packages = [
    {
      title: 'Standard Comfort',
      subtitle: 'Cozy Paws',
      price: '2000',
      features: [
        'Standard Suite',
        'Nutritious Meals',
        'Daily Playtime Sessions',
        'Basic Grooming Services'
      ]
    },
    {
      title: 'Deluxe Relaxation',
      subtitle: 'Tranquil Tails',
      price: '3000',
      features: [
        'Deluxe Suite',
        'Gourmet Meals',
        'Extended Playtime',
        'Relaxing Aromatherapy'
      ]
    },
    {
      title: 'Ultimate Pampering',
      subtitle: 'Pampered Paws',
      price: '5000',
      features: [
        'Premium Suite',
        'Customized Activity Plan',
        'Gourmet Meals',
        'Spa Day With Massage'
      ]
    }
  ];
  

  return (
    <div className="package2">
    <section className="packages-section">
      <div className="packages-header">
        <h3 className="packages-subtitle">OUR PACKAGES</h3>
        <h1 className="packages-title">HappyTails's Pawsome Pricing Packages</h1>
        <p className="packages-description">Elevate Your Pet's Stay with Our Premium Offerings</p>
      </div>

      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`package-card ${selectedCard === index ? 'selected' : ''}`}
            onClick={() => setSelectedCard(index)}
          >
            <h2 className="package-title">{pkg.title}</h2>
            <div className="price-container">
              <span className="currency">₹</span>
              <span className="price">{pkg.price}</span>
              <span className="period">/day</span>
            </div>
            <h3 className="package-subtitle">{pkg.subtitle}</h3>
            <ul className="features-list">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="book-now-btn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Packages;