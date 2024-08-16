import React from 'react';
import logo1 from '../images/Logo.png';
import logo from "../images/Logo.png";
import social from "../images/Social.png";
import "./Contact.css";
import Header from '../Components/Header';

const Contact = () => {
    return (
        <div className="ser-container">
            <Header />
            <div className="blue-background">
                <div className="logo-text-container">
                    <img src={logo1} alt="Logo1" className="logo1" />
                    <h1 className="header-text">We've got a great <br />feeling about this</h1>
                    <button className="start-button">Let's get started</button>
                    <div className="contact-info">
                        <p className="contact-text">Speak to us</p>
                        <p className="contact-number">0987654321</p>
                        <p className="contact-email">contact@ruvadg.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-header">
                <h2 className="ser-text">Let's get started!</h2>
            </div>
            <br />
            <p className="ser-subtext"><b>Fill in the blank and we'll respond in one business day</b></p>
            <p className="ser-fainttext">Just want to chat? Call or email, we're a nice bunch</p>
            <div className="question-container">
                <div className="question-row">
                    <div className="question">
                        <p className="question-text"><b>What's your name?</b></p>
                        <input className="name-input" type="text" placeholder="Your name here" />
                    </div>
                    <div className="question">
                        <p className="question-text"><b>Name of your company/organization?</b></p>
                        <input className="name-input" type="text" />
                    </div>
                </div>
                <div className="question-row">
                    <div className="question">
                        <p className="question-text"><b>How shall we contact you?</b></p>
                        <input className="contact-input" type="text" placeholder="Phone Number" />
                    </div>
                    <div className="question">
                        <p className="question-text"><b>Email Address</b></p>
                        <input className="email-input" type="email" />
                    </div>
                </div>
                <div className="project-section">
                    <p className="project-header"><b>Tell us about your project?</b></p>
                    <p className="project-subtext">Let us know how we can help you</p>
                    <textarea className="project-description"></textarea>
                </div>
                <div className="question">
                    <p className="question-text"><b>How do you hear about us?</b></p>
                    <input className="hear-about-input" type="text" style={{ width: '100%' }} />
                </div>
                <div className="button-container">
                    <button className="submit-button">SUBMIT</button>
                </div>

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
            </div>
        </div>
        
    );
}

export default Contact;
