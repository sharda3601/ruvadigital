import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question"> How much dose a company charge to build an app?</button>
        <div className="faq-answer">
          <p>The cost of building an app can very significantly
            depending on several factors, making it difficult to give a 
            one-size-fits-all answer. Depending upon the app's complexity,
            platform, tech used, design, and features cost an vary. Some 
            company charges on an hourly basis. The average costs range
            between 3L-5L.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"> Do mobile app developers in Pune provide a payment
        gateway facility for E-Commerce apps?</button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"> What are the advantages of hiring a mobile app
        deavelopment company?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
