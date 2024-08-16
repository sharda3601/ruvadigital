import React from "react";
import header from "../Components/Header";
import footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Mainservices.css";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Linkedin from "../images/Linkedin.png";
import Whatsapp from "../images/Whatsapp.png";
import Youtube from "../images/Youtube.png";
import Marketing from "../images/Marketing.png";
import Research from "../images/Research (1).png";
import Position from "../images/Positioned.png";
import creative from "../images/Creative.png";
import market from "../images/Marketing (2).png";
import Management from "../images/Management.png";
import Logo from "../images/RuvAa 1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Seo from "../Pages/Seo";
function Mainservices() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="intro-section">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="row">
            <div className="col-md-6 text">
              <h1>From Concepts to Conversations.</h1>
              <p>
                A full-service, creative digital marketing agency that converts
                indifferent consumers into excited customers.
              </p>
            </div>
            <div className="col-md-6">
            <div className="navy-blue-circle">
                <div className="circle-item circle-item1">
                    <div className="rectangle rectangle1">
                        <span>SMM (Social Media Marketing)</span>
                    </div>
                </div>
                <div className="circle-item circle-item2">
                    <div className="rectangle rectangle2">
                        <span>SEO (Search Engine Optimization)</span>
                    </div>
                </div>
                <div className="circle-item circle-item3">
                    <div className="rectangle rectangle3">
                        <span>Content Marketing</span>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </section>

        <section className="what-we-serve">
          <h2>What Do We Serve?</h2>
          <p>
            End-to-end neuromarketing services and branding strategies of the
            digital world.
          </p>
          <div className="services-tags">
            <span> <Link to="/seo">SEO</Link></span>
            <span><Link to="/SMM">SMM</Link></span>
            <span><Link to="/ContentMarketing">Content Marketing</Link></span>
            <span>Graphic Design</span>
            <span>AI Marketing</span>
            <span>Google Ads</span>
            <span>Website Development</span>
          </div>
        </section>

        <section className="how-we-do-it">
          <h2>HOW WE DO IT?</h2>
          <p>Our unique 5-step branding process to build a 
          future-proof brand.</p>
          <div className="how-we-do-it-content">
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Research} alt="Research" />
                  <h3>Research</h3>
                  <p>
                    We develop future-proof brands with meticulous research to
                    define a business problem by assessing existing marketing
                    collaterals.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Position} alt="Positioning" />
                  <h3>Positioning</h3>
                  <p>
                    We co-create the brand's purpose, vision, platform,
                    architecture, and brand message matrix by blending human
                    behavioral patterns with data science.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={creative} alt="Creative" />
                  <h3>Creative</h3>
                  <p>
                    We unlock scalable and accessible solutions for effortless
                    customer interactions by identifying customer experience
                    gaps and bringing the brand closer to customers.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="servicess">
                  <img src={market} alt="Marketing" />
                  <h3>Marketing</h3>
                  <p>
                    We implement effective marketing strategies to reach the
                    target audience and boost brand visibility and engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="servicess">
                  <img src={Management} alt="Management" />
                  <h3>Management</h3>
                  <p>
                    We offer solutions to help brands manage customer pain
                    points and ensure a seamless customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tools-we-use">
          <h2>Tools We Use</h2>
          <div className="tools-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Whatsapp} alt="WhatsApp" />
            <img src={Youtube} alt="YouTube" />
            <img src={Linkedin} alt="LinkedIn" />
          </div>
        </section>

        <section className="marketing-section">
          <h2>Marketing</h2>
          <img src={Marketing} alt="Marketing" className="marketing-image" />
        </section>

        <section className="quote-section">
          <h2>Let's create a measurable impact on your business.</h2>
          <button className="quote-button">DESIGN A QUOTE</button>
        </section>
      </main>
      <Footer />
      {/* <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <p>Design</p>
            <p>Technology</p>
            <p>Neuromarketing</p>
            <p>Digital Marketing</p>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <p>About Us</p>
            <p>Team</p>
            <p>Career</p>
          </div>
          <div className="footer-column">
            <h3>For Our Client</h3>
            <p>Work</p>
            <p>Clients</p>
            <p>Blog</p>
            <p>Reach Us</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Site Map</p>
            <p>Refund Policy</p>
          </div>
        </div>
        <div className="footer-social">
          <a href="/">Facebook</a>
          <a href="/">LinkedIn</a>
          <a href="/">Instagram</a>
          <a href="/">YouTube</a>
        </div>
      </footer> */}
    </div>
  );
}

export default Mainservices;
