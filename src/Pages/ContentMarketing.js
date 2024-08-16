import React from 'react';
import {Link} from 'react-router-dom';
import './ContentMarketing.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import ServAnimate from './ServAnimate';
import FAQContent from '../Components/FAQContent';


function ContentMarketing() {
    return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1> What is ContentMarketing? </h1> <br></br>
        <p> Content Marketing is a marketing Strategy used to attract
            consumers, increase awareness, and engagement, and retain
            an audience with the help of content. The content can be 
            in written format, videos, podcasts, or in any other consumable format.
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> We Serve a dedicated strategy with 
            a balance of message and CTA
            (click to action). The main reason 
            behind content marketing is to gain 
            more leads and increase engagement.
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
      <FAQContent />
    <Footer1/>
    </div>
  );
}

export default ContentMarketing;
