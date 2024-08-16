import React from 'react';
import {Link} from 'react-router-dom';
import './SMM.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import ServAnimate from './ServAnimate';
import FAQSMM from '../Components/FAQSMM';

function SMM() {
    return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1> What is SMM? </h1> <br></br>
        <p> Social media often feeds into the discovery of new content such as news
          stories, and "discovery" is a search activity. Social media can also help build
          links that in turn support into SEO efforts. Many people also perform searches
          at social media sites to find social media content. Social connections may also
          impact the relevancy of some results, either within a social media network or at
          a 'mainstream' serch engine.
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> We can help you build your brand , drive
          traffic to your site, increase engagement,
          and increase brand awareness. We work
          towards our client's goals and strive to 
          achieve them.
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
      <FAQSMM />
    <Footer1/>
    </div>
  );
}

export default SMM;
