// Example: src/components/Navbar.js


import React, { useState } from "react";
import { Link } from "react-scroll"; // react-scroll ka Link import
// import { NavLink } from "react-router-dom"; // NavLink import karo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} 
from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faFolderOpen, 
  faPhone,
  faBars, 
  faTimes
} 
from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // CSS ko import karo

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



  return (

  <>
    
    <nav className="navbar">
    {/* <div className="logo">My Portfolio</div> */}
       {/* 🔗 Social Links Div */}


       <div className="social-links">
        
       <a href="https://github.com/TarunaAsthana23" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/pragyaasthana/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" alt="LinkedIn" />
        </a>
        <a href="https://your-portfolio.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFolderOpen} size="lg" alt="Portfolio" />
        </a>
        <a href="mailto:hiyasrivastava777@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" alt="Email" />
        </a>
        <a href="tel:+917985877742" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPhone} size="lg" alt="Contact" />
          </a>
      </div>

      <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Projects</Link></li>
          
        </ul>

       {/* 🔗 Normal Navigation Links */}
      
        {/* <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li> */}

        {/* Popup Overlay Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </nav>

      {menuOpen && (
        <div className="popup-overlay">
          <div className="close-icon" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="popup-menu">
            <ul>
              <li><Link to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>About</Link></li>
              <li><Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" onClick={closeMenu}>Projects</Link></li>
              
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;



// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


  