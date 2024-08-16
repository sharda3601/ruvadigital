import React from 'react';
import { Link } from 'react-router-dom';
import './ContentMarketing.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import ServAnimate from './ServAnimate';
import FAQAI from '../Components/FAQAI';

function  AIMarketing() {
    return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1> <b>What is AI Marketing </b></h1> <br></br>
        <p> 
            <br></br>
            <br></br>
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> We use AI tools to derive data-driven
            strategies, hyper-personalization, and 
            predictive analytics to craft catchy 
            content campaigns, and elevate the customer
            experience.

        </h3>
        <div className="service-tags">
        <span><Link to="/Seo">SEO</Link></span>
          <span><Link to="/SMM">SMM</Link></span>
          <span ><Link to="/ContentMarketing">Content Marketing</Link></span>
          <span><Link to="/graphicDesign">Graphic Design</Link></span>
          <span><Link to="/Application">App Developement</Link></span>
          <span><Link to="/AIMarketing">AI Marketing</Link></span>
          <span><Link to="/SearchEngine">Search engine Marketing</Link></span>
          <span><Link to="/WebDevelopment">Website Developement</Link></span>
        </div>
      </section>
      <FAQAI />
    <Footer1/>
    </div>
  );
}

export default AIMarketing;
