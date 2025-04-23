import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../Cart/CartContext";

import "./Navbar.css";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { getCartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navdiv">
      <nav className="navbar">
        <div className="logo">HappyTails</div>

        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/service" className="nav-link" onClick={handleLinkClick}>
            Services
          </NavLink>
          <NavLink to="/products" className="nav-link" onClick={handleLinkClick}>
            Products
          </NavLink>
          <NavLink to="/reward" className="nav-link" onClick={handleLinkClick}>
            Rewards
          </NavLink>

          <NavLink to="/Cart" className="cart-icon" onClick={handleLinkClick}>
            <IoCartOutline />
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </NavLink>

          <header className="nav-link2">
            {isAuthenticated && <h3>{user.name}</h3>}
            {isAuthenticated ? (
              <button className="auth-button" onClick={() => logout()}>
                Logout
              </button>
            ) : (
              <button className="auth-button" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </header>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
