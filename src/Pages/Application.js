import React from 'react';
import { Link } from 'react-router-dom';
import './ContentMarketing.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import ServAnimate from './ServAnimate';
import AppDevFAQ from '../Components/AppDevFAQ';

function Application() {
    return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1> <b>What is Application Development </b></h1> <br></br>
        <p> 
            <br></br>
            <br></br>
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> Our expert developers can create a custom
            app for you. We'll help from start to
            finish, ensuring it's easy to use, packed
            with features, integrates well with other
            platforms, meets app store guidelines, and
            is easy to find
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
      <AppDevFAQ />
      
    <Footer1/>
    </div>
  );
}

export default Application;
