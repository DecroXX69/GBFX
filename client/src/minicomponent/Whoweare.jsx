import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import './whoweare.css';
import video from '../assets/tradeing.mp4';

const TradingSection = () => {
  const [activeSection, setActiveSection] = useState('who-we-are');

  const sections = [
    {
      id: 'who-we-are',
      title: 'Daily Zoom Meetings',
      content: ' Get expert guidance and stay updated with the latest strategies.',
    },
    {
      id: 'what-we-do',
      title: 'Social Media Promotions',
      content:
        'Build visibility and grow your network faster.',
    },
    {
      id: 'how-it-works',
      title: 'Celebrity Engagement: ',
      content:
        'Stay motivated and inspired with top influencers and celebrity participation.',
    },
    {
      id: 'why-choose-us',
      title: '24x7 Telegram Support',
      content:
        'Live chat groups ensure your questions are answered anytime, anywhere.',
    },
    {
      id: 'why-kill-us',
      title: 'Unique Earning Concepts',
      content:
        'Redefine your rewards and achieve unexpected financial growth.',
    }

  ];

  return (
    <div className="trading-section-container">
      {/* Left side - Content */}
      <div className="content-section">
        <div className="section-header">
          <span className="account-label"><i>"Take first step towards success-because waiting won't change your life, action will"</i></span>
          <h2 className="section-title">Why Choose Green Bull?</h2>
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