import './service.css';

import pet3 from '../assets/pet3.jpg';
import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.jpg';


const Service = () => {
  return (
    <div className="services2">
    <section className="services-section">
      <div className="services-content">


      <div className="services-header-container">
  <div className="services-header">
    <span className="services-label">SERVICES</span>
    <h2 className="services-title">
      A Haven of <span className="highlight">Indulgence</span><br />
      and <span className="highlight">Customized</span> Pet<br />
      Services
    </h2>
    <p className="services-description">
      We strive to provide a luxurious and personalized experience<br />
      for your furry companion.
    </p>
    <button className="see-more-btn">See More</button>
  </div>
  <div className="services-image">
    <img src= {pet3} alt="services" />
  </div>
</div>




        <div className="services-cards">
          <div className="service-card">
            <div className="card-icon">
              <img src= {service1} alt="Luxury Accommodations" />
            </div>
            <h3>Pet Products</h3>
            <p>Treat your furry friend to a stay in our spacious and comfortable suites designed</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={service2} alt="Grooming Treatments" />
            </div>
            <h3>Grooming Treatments</h3>
            <p>Pamper your pet with our professional grooming services</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={service3} alt="Playtime and Enrichment" />
            </div>
            <h3>Playtime and Enrichment</h3>
            <p>Our facility offers dedicated play areas where pets can participate in play sessions</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={service4} alt="Personalized Care" />
            </div>
            <h3>Personalized Care</h3>
            <p>Our dedicated staff provides individualized attention to meet the specific needs of your pet</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={service5} alt="Personalized Care" />
            </div>
            <h3>Pet Fitness Program</h3>
            <p>Our dedicated staff provides individualized attention to meet the specific needs of your pet</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={service6} alt="Personalized Care" />
            </div>
            <h3>Pet Social Events</h3>
            <p>Our dedicated staff provides individualized attention to meet the specific needs of your pet</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Service;