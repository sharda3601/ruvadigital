import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">What type of content is best?</button>
        <div className="faq-answer">
          <p>The best type of content is user-centric-content. The content that is catered to the audience is 
            considered the best content. However, many types of content can be used to reach out to users.
          </p>
         
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Which platform is best for content marketing?</button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">what type of content is trending?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
