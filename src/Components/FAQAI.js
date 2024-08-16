import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">How AI can help in marketing?</button>
        <div className="faq-answer">
          <p>AI can be a game-changer for marketers. It personalizes experiences for customers, 
            predicts their needs for targeted compaigns, assists with content creation, and automates repetitive
            tasks. This frees up marketers to focus on strategy and creativity, while AI handles the heavy lifting 
            and analysis.</p>
          
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">How do i get started with AI marketing?</button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">How can AI benefit my marketing efforts?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
