import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css'; // Import the CSS file
import Footer from './Footer';
import Navbar from './Navbar';
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a PAMM account?",
      answer: "A PAMM account is an investment solution where a professional trader manages funds on behalf of multiple investors. The profits or losses are shared among investors in proportion to their investment in the PAMM account."
    },
    {
      question: "How does a PAMM account work?",
      answer: "Trader (Manager): The trader manages the account and executes trades using a combined pool of investors’ funds.  Investor: Investors allocate funds to the PAMM account for trading.  Profits or losses are distributed proportionally to each investor’s share of the account."
    },
    {
      question: "What are the benefits of investing in a PAMM account?",
      answer: "Professional Management: Managed by experienced traders. Transparency: Investors can monitor trading performance and profit distribution Diversification: Allows access to professional strategies without trading yourself"
    },
    {
      question: "What risks are involved?",
      answer: "Market Risks: Losses occur if the manager's trades perform poorly. Dependency Risk: Investors rely entirely on the manager’s expertise. Leverage Risk: PAMM accounts often involve leveraged trading, which can amplify both gains and losses."
    },
    {
      question: "How are profits and losses distributed?",
      answer: "Profits and losses are calculated based on the percentage of funds each investor has contributed to the total pool."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Most PAMM platforms allow withdrawals, but terms may vary. Check the withdrawal policies of the broker or platform, as some accounts may have lock-in periods or specific conditions."
      
    },
    {
      question: "How do I select a good PAMM account?",
      answer: "Track Record: Review the trader's historical performance. Transparency: Choose brokers offering detailed performance statistics and fair terms. Risk Management: Check if the trader follows disciplined risk management strategies.",
    },
    {
      question: "What fees are charged in PAMM accounts?",
      answer: "Performance Fee: A percentage of profits earned, typically charged by the trader.",
    },
  ];

  return (
    
    <div className="faq-section-container">
        {/* <Navbar /> */}
      <div className="faq-content-container">
        <div className="faq-header">
          <span className="faq-tag">FAQS</span>
          <h1 className="faq-title">General FAQ's</h1>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`faq-button ${openIndex === index ? 'active' : ''}`}
              >
                <span className="faq-question">{faq.question}</span>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              <div
                className={`faq-answer ${openIndex === index ? 'expanded' : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FAQSection;
