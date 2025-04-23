import React, { useEffect } from 'react';
import './service.css';
import { NavLink } from 'react-router-dom';

import pet3 from '../aa-image/assets/pet3.jpg';
import service1 from '../aa-image/assets-service/service1.webp';
import service2 from '../aa-image/assets-service/service2.png';
import service3 from '../aa-image/assets-service/s3.jpg';
import service4 from '../aa-image/assets-service/service4.png';
import service5 from '../aa-image/assets-service/service5.png';
import service6 from '../aa-image/assets-service/service6.jpg';

const Service = () => {
  // Scroll to the top when this component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services2">
      <section className="services-section">
        <div className="services-content">
          <div className="services-header-container">
            <div className="services-header">
              <span className="services-label">SERVICES</span>
              <h2 className="services-title">
                A Haven of <span className="highlight">Indulgence</span><br />
                and <span className="highlight">Customized</span> Pet Services
              </h2>
              <p className="services-description">
                We strive to provide a luxurious and personalized experience<br />
                for your furry companion.
              </p>

              <NavLink to="/service">
                <button className="see-more-btn">See More</button>
              </NavLink>
            </div>
            <div className="services-image">
              <img src={pet3} alt="services" />
            </div>
          </div>

          <div className="services-cards">
            <NavLink to="/products" className="service-card">
              <div className="card-icon">
                <img src={service1} alt="Luxury Accommodations" />
              </div>
              <h3>Pet Products</h3>
              <p>Discover a range of premium pet products, including toys, food, and accessories, designed to keep your furry friend happy, healthy, and comfortable.</p>
            </NavLink>

            <div className="service-card">
              <div className="card-icon">
                <img src={service2} alt="Grooming Treatments" />
              </div>
              <h3>Grooming Treatments</h3>
              <p>Pamper your pet with our professional grooming services, ensuring they look and feel their best with a clean coat, trimmed nails, and a refreshed demeanor.</p>
            </div>

            <div className="service-card">
              <div className="card-icon">
                <img src={service3} alt="Playtime and Enrichment" />
              </div>
              <h3>Playtime and Enrichment</h3>
              <p>Engage your pet with fun, interactive playtime sessions and enrichment activities that stimulate their mind and body for a balanced lifestyle.</p>
            </div>

            <div className="service-card">
              <div className="card-icon">
                <img src={service4} alt="Personalized Care" />
              </div>
              <h3>Personalized Care</h3>
              <p>Tailored care plans to meet your pet's unique needs, ensuring their comfort and well-being with love and attention.</p>
            </div>

            <div className="service-card">
              <div className="card-icon">
                <img src={service5} alt="Pet Fitness Program" />
              </div>
              <h3>Pet Fitness Program</h3>
              <p>Keep your pet active and healthy with our specially designed fitness programs, promoting physical wellness and a longer, happier life.</p>
            </div>

            <div className="service-card">
              <div className="card-icon">
                <img src={service6} alt="Pet Social Events" />
              </div>
              <h3>Pet Social Events</h3>
              <p>Bring your pets together to socialize and have fun at our exclusive pet-friendly events, fostering community and companionship.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
