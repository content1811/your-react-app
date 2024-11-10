// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">TwillBox</Link> {/* Link logo to homepage */}
      <ul className="nav-links">
        <li><Link to="/quiz">Style Quiz</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
      </ul>
      <button className="login-btn">Login / Sign Up</button>
    </nav>
  );
};

export default Navbar;
