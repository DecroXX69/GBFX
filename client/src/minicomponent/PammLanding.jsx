import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PammLanding.css';
import Growth from '../assets/growth.png';

const PAMMLanding = ({ heroImage }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="pamm-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-text">
            <h1 className="hero-title" data-aos="fade-right">
              Transform Your Trading <span className="gradient-text">Success</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-left">
              Join the elite world of PAMM trading. Let professional traders multiply your investments while you maintain full control.
            </p>
            <div className="hero-stats" data-aos="fade-up">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Active Traders</p>
              </div>
              <div className="stat-item">
                <h3>$50M+</h3>
                <p>Managed Assets</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <button className="cta-button" data-aos="zoom-in">
              Start Trading Now
              <ArrowRight className="button-icon" />
            </button>
          </div>
          <div className="hero-image" data-aos="zoom-in">
            {heroImage ? (
              <img src={Growth} alt="PAMM Trading Platform" />
            ) : (
              <div className="placeholder-image">
                <img src={Growth} alt="Growth" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PAMM Info Section */}
      <section className="info-section">
        <div className="info-content" data-aos="fade-up">
          <h2 className="section-title">What is a PAMM Account?</h2>
          <div className="info-grid">
            <div className="info-text" data-aos="fade-left">
              <p>
                PAMM (Percentage Allocation Money Management) revolutionizes how you invest in financial markets. Professional traders manage your funds while you maintain complete control over your investment.
              </p>
              <ul className="benefits-list">
                <li>✓ No trading experience required</li>
                <li>✓ Choose from verified top performers</li>
                <li>✓ Real-time performance monitoring</li>
                <li>✓ Flexible investment terms</li>
              </ul>
              <button className="secondary-button">
                Learn More
                <ArrowRight className="button-icon" />
              </button>
            </div>
            <div className="info-stats" data-aos="fade-up">
              <div className="circular-stat">
                <h4>Success Rate</h4>
                <div className="stat-circle">85%</div>
              </div>
              <div className="circular-stat">
                <h4>Average ROI</h4>
                <div className="stat-circle">25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PAMMLanding;
