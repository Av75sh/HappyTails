import React from 'react';
import "./About.css";
import HappyTails from './happy.png';

function About() {
  const features = [
    { icon: "📱", title: "Social Events" },
    { icon: "🛡️", title: "Safe Boarding" },
    { icon: "🦆", title: "Wellness & Relaxation" },
    { icon: "🌠", title: "Luxurious Experience" },
    { icon: "🤞🏻", title: "Pet Monitoring" },
    { icon: "🐾", title: "Expert Caretakers" },
    { icon: "💝", title: "Pet Products" },
    { icon: "🌄", title: "Pet Grooming" },
    { icon: "💪", title: "Fitness Program" },
    { icon: "🚄", title: "Travel & Vacation" }
  ];

  return (
    <div className="about-container">
      <div className="about-content">

        <div className="illustration">
          <div className="iphone-container">
            <div className="iphone-frame">
              <div className="notch"></div>
              <div className="screen">
              <img src={HappyTails} alt="Screen Content" className="screen-image" />
                
                <div className="mic-button">
                  <div className="mic-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h2 className="about-heading">ABOUT US</h2>
          <h1 className="main-heading">
            We Love to <span className="highlight">Take Care</span> of Your Pets
          </h1>

          <p className="description">
            At <span className="happy">HappyTails</span>, we’re passionate about providing the highest level of care for your beloved pets. Whether it’s a day of pampering, a safe and secure stay, or personalized wellness services, we’re here to ensure your furry family members feel right at home.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-title">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
