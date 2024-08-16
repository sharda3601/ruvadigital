import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">What does a social media marketing agency do?</button>
        <div className="faq-answer">
          <p>A social media marketing agency handles everything social media for you. They craft engaging
            content, manage your online community, and run targeted ads to help you achieve your social
            media goals, saving you time and boosting your brand presence.
          </p>
          
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"></button>
        <div className="faq-answer">
          <p></p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"></button>
        <div className="faq-answer">
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
