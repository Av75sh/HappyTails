import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PetStay</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#solutions">Solutions</a>
        <a href="#about">About Us</a>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
