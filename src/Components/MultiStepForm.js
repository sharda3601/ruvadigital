// MultiStepForm.js
import React, { useState } from 'react';
import './MultiStepForm.css'; // Import the CSS file

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <h2>Design A Quote</h2>
            <p>What services would you like to opt?</p>
            <button className="service-btn">UI / UX</button>
            <button className="service-btn">Branding</button>
            <button className="service-btn">Development</button>
            <button className="service-btn">Marketing</button>
            <button className="service-btn">All Services</button>
            <button className="continue-btn" onClick={nextStep}>Continue →</button>
          </div>
        );
      case 2:
        return (
          <div className="step">
            <button className="back-btn" onClick={prevStep}>←</button>
            <h2>Design A Quote</h2>
            <p>How do you want to work?</p>
            <button className="service-btn">Project</button>
            <button className="service-btn">Retainer</button>
            <button className="service-btn">Hours</button>
            <button className="continue-btn" onClick={nextStep}>Continue →</button>
          </div>
        );
      case 3:
        return (
          <div className="step">
            <button className="back-btn" onClick={prevStep}>←</button>
            <h2>Design A Quote</h2>
            <p>Project Description</p>
            <textarea placeholder="Describe your project..."></textarea>
            <button className="continue-btn" onClick={nextStep}>Continue →</button>
          </div>
        );
      case 4:
        return (
          <div className="step">
            <button className="back-btn" onClick={prevStep}>←</button>
            <h2>Design A Quote</h2>
            <p>Hi! I am</p>
            <input type="text" placeholder="Your Name" />
            <p>Reach me at</p>
            <input type="email" placeholder="Your Email" />
            <p>Country Name</p>
            <input type="text" placeholder="Country Name" />
            <p>Mobile No. +91</p>
            <input type="tel" placeholder="Mobile Number" />
            <button className="send-btn">SEND</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
