import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">Which are the best SEO strategies?</button>
        <div className="faq-answer">
          <p>1. For one, ensure that your website provides valuable and high-quality content.</p>
          <p>2. Give due attention to the SEO-friendly keywords relevant to your website.</p>
          <p>3. Hire a search engine optimization service agency to ensure that you reach your target audience and boost your organic growth.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">Why is SEO important for your website?</button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">How do I improve the SEO ranking of a website?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
