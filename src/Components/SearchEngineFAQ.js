import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">What is  the difference between SEO and SEM?</button>
        <div className="faq-answer">
          <p>The difference between SEO and SEM is one
            is done organically is paid. The results from SEO take
            longer than SEM. In SEM you will see the results of a
            campaign within 24 hours, but SEO takes 3-6 months for
            good results.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question"> What do SEM agencies charge? </button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">What is the role of SEM?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
