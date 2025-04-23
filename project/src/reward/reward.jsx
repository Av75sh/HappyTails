import React from 'react';
import { NavLink } from 'react-router-dom';
import './reward.css';
import service1 from '../aa-image/assets-service/service1.webp';
import service2 from '../aa-image/assets-service/service2.png';
import service3 from '../aa-image/assets-service/s3.jpg';

const Reward = () => {
  return (
    
    <div className="top2-section">
        <h1 className="headline">
          <span className="text-dark">How Rewards </span>
          <span className="text-orange">Actually work </span>
          <span className="text-dark"> ?  </span>
        </h1>
     
      
      <div className="services-cards-reward">

        <NavLink to="/packages" className="n-package">
           <div className="service-card-r">
            <div className="card-r-icon">
              <img src= {service1} alt="Luxury Accommodations" />
            </div>
            <h3>Step 1</h3>
            <span id='h-reward'> Join HappyTails Premium </span>
            <p>
            <ul id='u-reward'>
      <li>Free delivery on all your purchases</li>
      <li>Extra discounts on product purchases</li>
      <li>1 monthly free medical visit</li>
    </ul>
            </p>
            </div>
            </NavLink>

          <div className="service-card-r">
            <div className="card-r-icon">
              <img src={service2} alt="Grooming Treatments" />
            </div>
            <h3>Step 2</h3>
            <span id='h-reward'> Fetch Your Points </span>
            <p>
            <ul id='u-reward'>
      <li>Post a selfie with your pet</li>
      <li>Collect the points on your daily checkIn</li>
      <li>Get discount & free medical visit</li>
    </ul>
            </p>
          </div>

          <div className="service-card-r">
            <div className="card-r-icon">
              <img src={service3} alt="Playtime and Enrichment" />
            </div>
            <h3>Step 3</h3>
            <span id='h-reward'> Reward Yourself & Your Pet </span>
            <p>
            <ul id='u-reward'>
      <li>Free delivery on all your purchases</li>
      <li>Extra discounts on product purchases</li>
      <li>1 monthly free medical visit</li>
    </ul>
            </p>
          </div>
    </div>
    </div>
  );
};

export default Reward;