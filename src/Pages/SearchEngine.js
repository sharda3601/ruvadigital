import React from 'react';
import { Link } from 'react-router-dom';
import './ContentMarketing.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import './Seo.css';
import ServAnimate from './ServAnimate';
import SearchEngineFAQ from '../Components/SearchEngineFAQ';

function  SearchEngine() {
    return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1> <b>What is Search Engine Marketing</b></h1> <br></br>
        <p> Search Engine Marketing is a digital marketing
            strategy used to increase the visibility on a 
            search engine result page using a paid method.
            The most common tactic used is Google ads. 
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> What we do is in-depth keyword research and
             copywriting for your ad. We do focused competitor
             research before starting any ad. With proper
             messaging and written CTA, we will optimize 
             ypur ad with a lower PPC.
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
      <SearchEngineFAQ />
      
    <Footer1/>
    </div>
  );
}

export default SearchEngine;
