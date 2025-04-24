import React from 'react';
import "./contact.css";
import avinash from '../aa-image/assets-feed/avinash.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="top-section">
        <div className="content-wrapper">
          <div className="context-center">
            <h1>Your Pet's Dream Stay Awaits</h1>
            <h2>
              Contact <span className="highlight">HappyTails</span> Today
            </h2>
            <p>Reach Out to Reserve Your Pet's Spot</p>
          </div>
          <div className="button-group">
            <button className="btn contact-btn3">Contact Us</button>
            <button className="btn reserve-btn">Book Appointment</button>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <img src={avinash} alt="HappyTails Logo" />
            </div>
            <p className="tagline">
              We strive to provide a luxurious and personalized experience for your furry companion.
            </p>
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
              <a href="mailto:Info@Petopiahotel.com">@HappyTails.com</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider">
            <p>© HappyTails Pet Care center 2025. Made by Avinash Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;