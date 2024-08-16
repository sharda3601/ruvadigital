import React from 'react';
import { Link } from 'react-router-dom';
import './ContentMarketing.css';
import Header1 from './Header1';
import Footer1 from './Footer1';
import ServAnimate from './ServAnimate';
import FAQGraphics from '../Components/FAQGraphics';

function GraphicDesign() {
    return (
    <div className="App">
       <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h1><b> What is Graphic Design </b></h1> <br></br>
        <p> Tell your brand story with our hign-quality
            graphics that grabs the world's attention.
            We design flyers, brochures, catchy posts,
            logos, and captivating presentations that
            creates your brand's impact on the audience.
            Get yuorself a designer for your imagination.
        </p>
        
        <h4 style={{color:"darkblue"}}>What Do We Serve?</h4> <br></br>
        <h3> We can all kinds of imagnery and graphicals elements
            at the client's request. With proper visuals and page 
            layout, we tell the brand story in a way that grabs the
            audience's attention.
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
      <FAQGraphics />
      
    <Footer1/>
    </div>
  );
}

export default GraphicDesign;
