import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <h1 className="logo">A.</h1>

      {/* Navigation Links */}
      <nav className="menu">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/portfolio">Portfolio</Link>
        <Link className="link" to="/about">About</Link>

      </nav>

      {/* Contact Button */}
      <Link className="contact-link" to="/contact">
        <button id="navbtn">Contact Me</button>
      </Link>
    </div>
  );
};

export default Navbar;
