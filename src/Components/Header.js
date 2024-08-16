import React from "react";
import "./Header.css";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className=" col-lg-12 contact">Contact No.: 00097654321</div>
      <nav className="navbar">
        {/* <div className="logo">
          <img src={logo} alt="RUVA" width={100} height={100} />
        </div> */}
        <ul className="nav-links">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        </ul>
        <button className="contact-btn"><NavLink to="/contact">Contact Us</NavLink></button>
      </nav>
    </header>
  );
};

export default Header;
