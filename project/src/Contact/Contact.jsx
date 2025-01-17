import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="top-section">
        <div className="content-wrapper">
          <h1>Your Pet's Dream Stay Awaits</h1>
          <h2>Contact <span className="highlight">Petopia</span> Today</h2>
          <p>Reach Out to Reserve Your Pet's Spot</p>
          <div className="button-group">
            <button className="btn contact-btn">Contact Us</button>
            <button className="btn reserve-btn">Book Hotel Now</button>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <img src="/path-to-your-logo.png" alt="Petopia Logo" />
            </div>
            <p className="tagline">We strive to provide a luxurious and personalized experience for your furry companion.</p>
          </div>

          <div className="footer-center">
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/solutions">Solutions</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <a href="mailto:Info@Petopiahotel.com">Info@Petopiahotel.com</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <p>© Petopia Pet Hotels 2023. Made by gintara studio</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;