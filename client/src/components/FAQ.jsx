import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css'; // Import the CSS file
import Footer from './Footer';
import Navbar from './Navbar';
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I start forex trading?",
      answer: "To start forex trading, follow these key steps: 1) Educate yourself about forex markets and trading basics, 2) Choose a reputable forex broker, 3) Open and fund a demo account to practice risk-free, 4) Develop and test your trading strategy, and 5) Start with small positions when transitioning to live trading."
    },
    {
      question: "What is the minimum capital needed for forex trading?",
      answer: "While some brokers allow starting with as little as $50, it's recommended to begin with at least $500-$1000 to have adequate risk management. This allows for proper position sizing and helps absorb potential losses while learning."
    },
    {
      question: "What are the main currency pairs to trade?",
      answer: "The major currency pairs are EUR/USD, USD/JPY, GBP/USD, and USD/CHF. These pairs typically have the highest liquidity and tightest spreads, making them suitable for beginners. They also tend to be less volatile than exotic pairs."
    },
    {
      question: "What are the best times to trade forex?",
      answer: "The most active trading times are during the overlap of major market sessions: London-New York (8:00-12:00 EST) and Tokyo-London (3:00-4:00 EST). These periods typically offer the best liquidity and trading opportunities."
    },
    {
      question: "How do I manage trading risks?",
      answer: "Essential risk management includes: setting stop-loss orders, never risking more than 1-2% of your account on a single trade, using appropriate position sizing, and maintaining a trading journal to track and improve your performance."
    },
    {
      question: "What trading strategies should beginners use?",
      answer: "Beginners should start with simple strategies like trend following, support and resistance trading, or price action trading. Complex strategies with multiple indicators can be overwhelming and counterproductive when starting out."
    },
    {
      question: "What technical indicators are most useful?",
      answer: "Essential indicators include Moving Averages (MA), Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD), and Bollinger Bands. However, focus on mastering 2-3 indicators rather than using many simultaneously."
    },
    {
      question: "How important is fundamental analysis?",
      answer: "Fundamental analysis is crucial in forex trading. Key factors include interest rates, economic indicators, political events, and central bank policies. Understanding these helps predict longer-term currency movements and avoid trading during high-impact news."
    }
  ];

  return (
    
    <div className="faq-section-container">
        <Navbar />
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
      <Footer />
    </div>
  );
};

export default FAQSection;
