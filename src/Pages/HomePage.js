import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import content from '../Components/content';
import Jayesh from '../Components/Jayesh';
import cards from '../Components/cards';
import Testimonials from '../Components/Testimonials';
import Slogan from '../Components/Slogan';
import Quotes from '../Components/Quotes';
import MarketingSection from '../Components/MarketingSection';
import Footer1 from './Footer1';
import Header1 from './Header1';
import Section1 from './Section1';
const HomePage = () => {
  return (
    <div className="home-page">
      <Header1/>
      <Section1></Section1>
      <Services />
      <MarketingSection/>
      <Quotes/>
      <Slogan></Slogan>
      <Footer1></Footer1>
    </div>
  );
};

export default HomePage;
