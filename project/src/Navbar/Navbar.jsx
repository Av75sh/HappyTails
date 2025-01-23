import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navdiv">
    <nav className="navbar">
      <div className="logo">HappyTails</div>
      <div className="nav-links">
      
        <NavLink to="/" className="nav-link" active="active-link">Home</NavLink>
        <NavLink to="/service" className="nav-link" active="active-link">Services</NavLink>
        <NavLink to="/products" className="nav-link" active="active-link">Products</NavLink>
        <NavLink to="/reward" className="nav-link" active="active-link">Rewards</NavLink>
       <NavLink to="/contact" id="contact" className="contact-btn">Contact Us</NavLink> 
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
