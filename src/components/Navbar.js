// Example: src/components/Navbar.js


import React from "react";
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
  faPhone
} 
from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // CSS ko import karo

function Navbar() {
  return (
    <nav className="navbar">
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
        {/* <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li> */}

        <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active" offset={-70} >Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active" offset={-70} >About</Link></li>
        <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" offset={-70} >Contact</Link></li>
        <li><Link to="skills" smooth={true} duration={500} spy={true} activeClass="active" offset={-70} >Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500} spy={true} activeClass="active" offset={-70} >Projects</Link></li>
      </ul>




 {/* Contact Me Button */}

 
    {/* <Link to="about" smooth={true} duration={500}>About</Link>
    <Link to="skills" smooth={true} duration={500}>Skills</Link>
    <Link to="projects" smooth={true} duration={500}>Projects</Link>
    <Link to="contact" smooth={true} duration={500}>Contact</Link> */}
    </nav>
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


  