import React from 'react';
import './reward.css';

const Reward = () => {
  return (
    <div className="reward-container">
      <div className="top2-section">
        <h1 className="headline">
          <span className="text-dark">I never </span>
          <span className="text-orange">found my pet so happy and charming</span>
          <span className="text-dark"> till Now!</span>
        </h1>
        <p className="user-quote">— from HappyTails Team</p>
      </div>
      
      <div className="bottom2-section">
        <div className="ai-teacher-container">
          <h2 className="advanced-text">THE MOST ADVANCED</h2>
          <h2 className="ai-teacher-text">PetCare </h2>
        </div>
        
        
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
    </div>
  );
};

export default Reward;