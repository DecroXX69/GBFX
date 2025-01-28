import React from 'react';
import './how-it-works.css';
import img from '../assets/process-1.jpg';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="container">

        <div className="works-content">
          {/* Left side - Text content */}
          <div className="works-left">
            <div className="works-header">
              <span className="process-tag">THE PROCESS</span>
              <h2>How It Works</h2>
            </div>
            <div className="step-boxes">
              <div className="step-box">
                <div className="step-number">1</div>
                <div className="step-info">
                  <h3>Unlock Financial Freedom</h3>
                  <p>Put your money to work and achieve your financial goals effortlessly!</p>
                </div>
              </div>
              <div className="step-box">
                <div className="step-number">2</div>
                <div className="step-info">
                  <h3>Simple Investment Process</h3>
                  <p>
                     Earn returns of 10% to 40% monthly, depending on your investment and market trends.<br />
                     Examples:<br />
                    &nbsp;&nbsp;* Invest $100 → Earn $10–$40 monthly.<br />
                    &nbsp;&nbsp;* Invest $1,000 → Earn $100–$400 monthly.
                  </p>
                </div>
              </div>
              <div className="step-box">
                <div className="step-number">3</div>
                <div className="step-info">
                  <h3>MT4 Trading Benefits</h3>
                  <p>
                     Access real-time charts, custom indicators, and trading signals.<br />
                     Trade seamlessly on mobile, tablet, or desktop.<br />
                     Secure and efficient platform optimized for profit.
                  </p>
                </div>
              </div>
            </div><br />
            <p className="works-footer">
           <h7> <i>"Success takes time, but with Green Bull, it happens faster than you’d expect!"</i></h7>
            </p>
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
