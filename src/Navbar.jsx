// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar1.css'; 

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       {/* Logo */}
//       <h1 className="logo">A.</h1>

//       {/* Navigation Links */}
//       <nav className="menu">
//         <Link className="link" to="/">Home</Link>
//         <Link className="link" to="/portfolio">Portfolio</Link>
//         <Link className="link" to="/about">About</Link>

//       </nav>

//       {/* Contact Button */}
//       <Link className="contact-link" to="/contact">
//         <button id="navbtn">Contact Me</button>
//       </Link>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <h1 className="logo">A.</h1>

      {/* Burger Icon */}
      <div className="burger" onClick={toggleMenu}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`menu ${isOpen ? "active" : ""}`}>
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
