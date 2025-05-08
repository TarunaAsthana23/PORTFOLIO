import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-links">
          <a href="mailto:hiyasrivastava777@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> 
            hiyasrivastava777@gmail.com
          </a>
          <a href="tel:+917985877742" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPhone} />
             +91-7985877742
          </a>
          <a href="https://github.com/TarunaAsthana23" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} /> 
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pragyaasthana/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> 
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Taruna Asthana. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
