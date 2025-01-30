import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";

import "./Navbar.css";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="navdiv">
      <nav className="navbar">
        <div className="logo">HappyTails</div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/service" className="nav-link">Services</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/reward" className="nav-link">Rewards</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>

    
     

          {/* Shopping Cart Icon */}
          <NavLink to="/cartPage" className="cart-link">
            <IoCartOutline />
          </NavLink>

          <header className="nav-link2">
            {isAuthenticated && <h3>{user.name}</h3>}
            {isAuthenticated ? (
              <button className="auth-button" onClick={() => logout()}> Logout </button>
            ) : (
              <button className="auth-button" onClick={() => loginWithRedirect()}> Login </button>
            )}
          </header>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
