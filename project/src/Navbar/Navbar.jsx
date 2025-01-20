import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">HappyTails</div>
      <div className="nav-links">
      
        <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/service" className="nav-link" activeClassName="active-link">Services</NavLink>
        <NavLink to="/packages" className="nav-link" activeClassName="active-link">Products</NavLink>
        <NavLink to="/reward" className="nav-link" activeClassName="active-link">Rewards</NavLink>
       <NavLink to="/contact" className="contact-btn">Contact Us</NavLink> 
      </div>
    </nav>
  );
};

export default Navbar;
