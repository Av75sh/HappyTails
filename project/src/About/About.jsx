import React from 'react';
import './About.css';

function About() {
  const features = [
    { icon: "🐾", title: "Expert Caretakers" },
    { icon: "🛡️", title: "Safe and Secure" },
    { icon: "💆‍♂️", title: "Wellness & Relaxation" },
    { icon: "✨", title: "Luxurious" }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left side - Illustration */}
        <div className="illustration">
          <div className="illustration-inner">
            <div className="window-scene">
              <div className="cat-tree">
                {/* Cat tree and toys styled in CSS */}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="about-text">
          <h2 className="about-heading">ABOUT US</h2>
          <h1 className="main-heading">
            We Love to <span className="highlight">Take Care</span>
            <br />of Your Pets
          </h1>
          
          <p className="description">
            We strive to provide a luxurious and personalized
            experience for your furry companion.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">
                  {feature.icon}
                </span>
                <span className="feature-title">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
