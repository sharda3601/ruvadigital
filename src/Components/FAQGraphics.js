import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">Which are the best SEO strategies?</button>
        <div className="faq-answer">
          <p>The graphic design process typically involves four steps:
            understanding the client's goals (briefing), brainstorming 
            and creating ideas (concept deavelopment), refining the design
            based on feedback, and finalizing and delivering the files</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"> </button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Do I need graphic designer for my small business?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
