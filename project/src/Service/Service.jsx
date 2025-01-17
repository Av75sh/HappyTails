import './service.css';
import pet4 from '../assets/pet4.jpg';

const Service = () => {
  return (
    <section className="services-section">
      <div className="services-content">
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

        <div className="services-cards">
          <div className="service-card">
            <div className="card-icon">
              <img src= {pet4} alt="Luxury Accommodations" />
            </div>
            <h3>Luxury Accommodations</h3>
            <p>Treat your furry friend to a stay in our spacious and comfortable suites designed</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={pet4} alt="Grooming Treatments" />
            </div>
            <h3>Grooming Treatments</h3>
            <p>Pamper your pet with our professional grooming services</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={pet4} alt="Playtime and Enrichment" />
            </div>
            <h3>Playtime and Enrichment</h3>
            <p>Our facility offers dedicated play areas where pets can participate in play sessions</p>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <img src={pet4} alt="Personalized Care" />
            </div>
            <h3>Personalized Care</h3>
            <p>Our dedicated staff provides individualized attention to meet the specific needs of your pet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;