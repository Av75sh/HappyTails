import './Front.css'
import { NavLink } from 'react-router-dom';

import front1 from '../aa-image/assets-front/front1.avif';
import front2 from '../aa-image/assets-front/front2.avif';
import front3 from '../aa-image/assets-front/front3.avif';

import dhruv from '../aa-image/assets-feed/dhruv.png';
import abhinav from '../aa-image/assets-feed/abhinav.png';
import ankit from '../aa-image/assets-feed/ankit.png';
import anup from '../aa-image/assets-feed/anup.png';
import avinash from '../aa-image/assets-feed/avinash.jpg';

function Front() {
  return (
    <div className="front">
    <div className="container">
      <div className="main-content2">
        <div className="text-content">
          <h1>Providing a Stress-Free<br />Pets Experience</h1>
          <p>We offer a range of services to ensure your pets receive the best care possible.</p>
          
          <div className="cta-section2">
        
            <NavLink to="/Appointment">
            <button className="book-now-btn2">Book Now</button>
            </NavLink>
            
            <button className="watch-intro-btn2"
              onClick ={() => window.open('https://www.youtube.com/' , '_blank')}>
              <span className="play-icon2">▶</span>
              Watch Intro
            </button>

          </div>
        </div>

        <div className="circular-images">
          <div className="circle large" style={{ 
            backgroundImage: `url(${front1})`,
            backgroundColor: "#9FD89F"
          }}></div>
          <div className="circle medium" style={{ 
            backgroundImage: `url(${front2})`,
            backgroundColor: "#FFE5A3"
          }}></div>
          <div className="circle small" style={{ 
            backgroundImage: `url(${front3})`,
            backgroundColor: "#FFFFFF"
          }}></div>
        </div>
      </div>

      <div className="trust-container">
        <div className="profile-images">
          <img src= {dhruv} alt="Profile 1" />
          <img src= {abhinav} alt="Profile 2" />
          <img src= {ankit} alt="Profile 3" />
          <img src= {anup} alt="Profile 4" />
          <img src= {avinash} alt="Profile 5" />
        </div>
        <p>Trusted by over 2,000+ clients worldwide since 2025</p>
      </div>
    </div>
    </div>
  )
}

export default Front