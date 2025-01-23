import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2>Choose the Perfect Plan for Your Forex Journey</h2>
        <p>Whether you're starting out or ready to scale, we have the right plan for you!</p>
      </div>
      <div className="pricing-container">
        <div className="pricing-plan basic">
          <h3>Basic</h3>
          <p>$99/Monthly</p>
          <ul>
            <li>Weekly online meeting</li>
            <li>Unlimited learning access</li>
            <li>24/7 technical support</li>
            <li>Personal training</li>
          </ul>
          <button>Choose Plan</button>
        </div>

        <div className="pricing-plan standard highlighted">
          <h3>Standard</h3>
          <p>$149/Monthly</p>
          <ul>
            <li>Weekly online meeting</li>
            <li>Unlimited learning access</li>
            <li>24/7 technical support</li>
            <li>Personal training</li>
            <li>Business analysis</li>
          </ul>
          <button>Choose Plan</button>
        </div>

        <div className="pricing-plan premium">
          <h3>Premium</h3>
          <p>$199/Monthly</p>
          <ul>
            <li>All Standard features</li>
            <li>Unlimited learning access</li>
            <li>24/7 technical support</li>
            <li>Personal training</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
