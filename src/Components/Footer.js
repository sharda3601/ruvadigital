import React from "react";
import "./Footer.css";
import logo from "../images/Logo.png";
import social from "../images/Social.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="logofooter">
            <img src={logo} alt="RUVA Digital Media" width={140} height={140} />
            <img src={social} alt="RUVA Digital Media" />
          </div>
          <div className="servicefooter">
            <h3>Services</h3>
            <ul>
              <li>Design</li>
              <li>Technology</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="Clients">
            <h3>For Our Clients</h3>
            <ul>
              <li>Work</li>
              <li>Client</li>
              <li>Blog</li>
              <li>Reach Us</li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
