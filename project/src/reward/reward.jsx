import React from 'react';
import './reward.css';

const Reward = () => {
  return (
    <div className="reward-container">
      <div className="top-section">
        <h1 className="headline">
          <span className="text-dark">I never </span>
          <span className="text-orange">Spoke English More Confidently</span>
          <span className="text-dark"> till Now!</span>
        </h1>
        <p className="user-quote">— speakX user from Delhi</p>
      </div>
      
      <div className="bottom-section">
        <div className="ai-teacher-container">
          <h2 className="advanced-text">THE MOST ADVANCED</h2>
          <h2 className="ai-teacher-text">AI Teacher</h2>
        </div>
        
        <div className="phone-container">
          <div className="phone-frame">
            <div className="chat-bubble user">
              <span className="sender">You</span>
              <p>
                <span>Hi, I am Ayush and I </span>
                <span className="text-red">am good</span>
              </p>
            </div>
            <div className="chat-bubble ai">
              <span className="sender">AI Teacher</span>
              <p>That's Great! But a better way of saying this is, "Hi, My Name is Ayush and I am doing Good"</p>
            </div>
            <div className="mic-button">
              <div className="mic-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;