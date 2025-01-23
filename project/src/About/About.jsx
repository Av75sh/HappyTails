import React from 'react';
import './About.css';



function About() {
  const features = [
    { icon: "🐾", title: "Expert Caretakers" },
    { icon: "🛡️", title: "Safe and Secure" },
    { icon: "💆‍♂️", title: "Wellness & Relaxation" },
    { icon: "🌠", title: "Luxurious Experience " },
    { icon: "🧑🏻‍🧑‍🧒", title: "24/7 Pet Monitoring" },
    { icon: "🌄", title: "Pet Daycare" },
    { icon: "💆‍♂️", title: "Pet Products" },
    { icon: "📱", title: "Pet Social Events" },
    { icon: "💪", title: "Pet fitness Program" },
    { icon: "🚄", title: "Tavel & Vacation" }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
       

        <div className="illustration">
        <div className="iphone-container">
          <div className="iphone-frame">
            <div className="notch"></div>
            <div className="screen">
              <div className="chat-content">
                <div className="chat-bubble user">
                  <span className="sender">You</span>
                  <p>
                    <span>Hi, I am Avinash and I </span>
                    <span className="text-red">present you HappyTails</span>
                  </p>
                </div>
                <div className="chat-bubble ai">
                  <span className="sender">HappyTails</span>
                  <p>It's a second home for your pet can have a home like feeling, we take good care and provide nourishmnet to your loved ones</p>
                </div>
              </div>
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
            We Love to <span className="highlight">Take Care</span>
            <br />of Your Pets
          </h1>
          
          <p className="description">
            At <span className='happy'> HappyTails </span> we’re passionate about providing the highest level of care for your beloved pets. Whether it’s a day of pampering,
             a safe and secure stay, or personalized wellness services, we’re here to ensure your furry family members feel right at home.
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
