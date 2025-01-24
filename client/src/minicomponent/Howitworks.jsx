import React from 'react';
import './how-it-works.css';
import img from '../assets/process-1.jpg';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Sign up, It's Free!",
      description: "Our team will set up your account and help you build job to easy-to-use web dashboard."
    },
    {
      number: 2,
      title: "Find best Deals and Invest",
      description: "Create and Trade anywhere from 1-100% openings with just a few clicks. customize your own."
    },
    {
      number: 3,
      title: "Get you profit back",
      description: "View market, reviews, and rosters before forex arrive on the site, and post reviews and pay, effortlessly."
    }
  ];

  return (
    
    <div className="how-it-works">
      <div className="container">
      
        <div className="works-content">
          {/* Left side - Text boxes */}
          <div className="works-left">
            <div className="works-header">
              <span className="process-tag">THE PROCESS</span>
              <h2>How It Works</h2>
            </div>
            <div className="step-boxes">
              {steps.map((step) => (
                <div key={step.number} className="step-box">
                  <div className="step-number">{step.number}</div>
                  <div className="step-info">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="works-right">
            <img src={img} alt="Mobile app interface" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;