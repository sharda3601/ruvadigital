import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import FAQ from '../Components/FAQ';
import Header1 from './Header1';
import Footer1 from './Footer1';
import './Seo.css';
import ServAnimate from './ServAnimate';

function SEO() {
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    setAnimate(true);
  };
  return (
    <div className="App">
     <Header1/>
      <ServAnimate></ServAnimate>
      
      <section className="content-section">
        <h2 className='text-white text-start px-5 py-3'>What is SEO?</h2>
        <p>You can attract all the visitors in the world, but if they're coming to your site because Google tells them you're a resource for Apple computers when really you're a farmer selling apples, that is not quality traffic. Instead you want to attract visitors who are genuinely interested in products that you offer.</p>
        
        <h3 className='text-start px-5 py-3'>What Do We Serve?</h3>
        <p className='serv'>A strategy and a broad spectrum of creative brand marketing services in the digital world.</p>
        <div className="service-tags mx-5">
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
      
      <FAQ />
    <Footer1/>
    </div>
  );
}

export default SEO;
