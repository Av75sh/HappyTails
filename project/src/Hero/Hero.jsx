import React, { useState, useEffect } from 'react';
import pet1 from '../assets/pet1.jpg';
import pet2 from '../assets/pet2.jpg';
import pet3 from '../assets/pet3.jpg';
import pet4 from '../assets/pet4.jpg';


const Hero = () => {
  const images = [
    pet1, pet2, pet3, pet4
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change every 3 sec
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); 
    }, 6000);

  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="hero">
      {/* <div className="hero-content">
        <h1>Uniting Hearts and Paws<br />in a Haven of Love</h1>
        <p>We embrace Your Pets as family, nurturing their well-being and<br />happiness with tender care and expertise</p>
        <button className="reservation-btn">
          Reservation Now
          <span className="paw-icon">🐾</span>
        </button>
      </div> */}

      {/* Carousel Image */}
      <div className="hero-carousel">
        <img src={images[currentIndex]} alt={`carousel image ${currentIndex}`} />
      </div>
    </main>
  );
};

export default Hero;
