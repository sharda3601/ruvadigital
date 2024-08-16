import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Mainservices from './Pages/Mainservices';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Contact1 from './Pages/Contact1';
import Seo from './Pages/Seo';
import About1 from './Pages/About1';
import SMM from './Pages/SMM';
import ContentMarketing from './Pages/ContentMarketing';
import GraphicDesign from './Pages/GraphicDesign';
import SearchEngine from './Pages/SearchEngine';
import WebDevelopment from './Pages/WebDevelopment';
import Application from './Pages/Application';
import AIMarketing from './Pages/AIMarketing';
const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Mainservices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='Contact1' element={<Contact1/>}/>
        <Route path='About1' element={<About1/>}/>
        <Route path="/seo" element={<Seo />} />
        <Route path="/SMM" element={<SMM />} />
        <Route path="/ContentMarketing" element={<ContentMarketing />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/SearchEngine" element={<SearchEngine/>} />
        <Route path="/WebDevelopment" element={<WebDevelopment/>}/>
        <Route path="/Application" element={<Application/>}/>
        <Route path="AIMarketing" element={<AIMarketing/>}/>
      
      </Routes>
    </Router>
  );
};

export default App;
