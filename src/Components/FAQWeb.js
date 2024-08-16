import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <button className="faq-question">Which language is mostly used in web developement?</button>
        <div className="faq-answer">
          <p>There isn't one single most used language in web developement, but a combination of languages 
            depending on the specific function. However, Javascript stands out as the most common and essential 
            language of web developement.
          </p>
          
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">What does a web developer do?</button>
        <div className="faq-answer">
          <p>SEO is important because it helps improve the visibility of your website in search engine results, leading to more traffic and potential customers.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-question">do i need a web designer and a web developer?</button>
        <div className="faq-answer">
          <p>To improve SEO ranking, focus on creating high-quality content, optimizing for relevant keywords, and building backlinks from reputable sources.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
