import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import './whoweare.css';
import video from '../assets/tradeing.mp4';

const TradingSection = () => {
  const [activeSection, setActiveSection] = useState('who-we-are');

  const sections = [
    {
      id: 'who-we-are',
      title: 'Who we are',
      content: 'As a brokerage firm or trading platform, we are dedicated to providing innovative and user-friendly trading.',
    },
    {
      id: 'what-we-do',
      title: 'What we do',
      content:
        'We offer comprehensive trading solutions across multiple financial markets including forex, stocks, and cryptocurrencies, all backed by advanced technology and expert support.',
    },
    {
      id: 'how-it-works',
      title: 'How it works',
      content:
        'Our platform provides real-time market data, advanced charting tools, and seamless execution. Simply sign up, fund your account, and start trading with confidence.',
    },
    {
      id: 'why-choose-us',
      title: 'Why choose us',
      content:
        'With our competitive spreads, advanced trading tools, and 24/7 customer support, we ensure the best possible trading experience for both beginners and experienced traders.',
    },
  ];

  return (
    <div className="trading-section-container">
      {/* Left side - Content */}
      <div className="content-section">
        <div className="section-header">
          <span className="account-label">ACCOUNT</span>
          <h2 className="section-title">Trading Accounts</h2>
        </div>

        <div className="accordion-container">
          {sections.map((section) => (
            <div
              key={section.id}
              className="accordion-item"
            >
              <button
                onClick={() => setActiveSection(activeSection === section.id ? '' : section.id)}
                className={`accordion-button ${activeSection === section.id ? 'active' : ''}`}
              >
                <span className="accordion-title">{section.title}</span>
                <ChevronDown className={`accordion-icon ${activeSection === section.id ? 'rotated' : ''}`} />
              </button>

              <div className={`accordion-content ${activeSection === section.id ? 'expanded' : ''}`}>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Video */}
      <div className="video-section">
        <div className="video-container">
          <video
            className="trading-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default TradingSection;