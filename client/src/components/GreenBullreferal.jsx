import React from 'react';
import './GreenBull.css';
import Navbar from './Navbar';
import Footer from './Footer';
const GreenBullPage = () => {
  const ranks = [
    {
      rank: 'Beginner',
      salesAmount: '$100',
      referralCommission: '15%',
      levelIncome: 'N/A',
      businessRequirement: 'N/A',
      legRatio: 'N/A',
      reward: 'N/A'
    },
    {
      rank: 'Bronze',
      salesAmount: '$500',
      referralCommission: '20%',
      levelIncome: '5%',
      businessRequirement: '$10,000',
      legRatio: '40:40:20',
      reward: '$300'
    },
    {
      rank: 'Silver',
      salesAmount: '$1,000',
      referralCommission: '23%',
      levelIncome: 'Yes',
      businessRequirement: '$30,000',
      legRatio: '40:40:20',
      reward: '$1,000'
    },
    {
      rank: 'Gold',
      salesAmount: '$2,000',
      referralCommission: '26%',
      levelIncome: 'Yes',
      businessRequirement: '$100,000',
      legRatio: '40:40:20',
      reward: '$4,000'
    },
    {
      rank: 'Diamond',
      salesAmount: '$5,000',
      referralCommission: '29%',
      levelIncome: 'Yes',
      businessRequirement: '$500,000',
      legRatio: '40:40:20',
      reward: '$20,000'
    },
    {
      rank: 'Platinum',
      salesAmount: '$10,000',
      referralCommission: '32%',
      levelIncome: 'Yes',
      businessRequirement: '$2,000,000',
      legRatio: '40:40:20',
      reward: '$80,000'
    },
    {
      rank: 'Advisor',
      salesAmount: '$25,000',
      referralCommission: '35%',
      levelIncome: 'Yes',
      businessRequirement: '$10,000,000',
      legRatio: '40:40:20',
      reward: '$400,000'
    }
  ];

  return (
    <div className="gb-container">
      <Navbar />
      {/* Introduction Section */}
      <section className="section intro-section">
        <div className="container">
          <h1 className="main-title">Introduction to Green Bull <span>(GBTrade)</span></h1>
          <div className="intro-content">
            <h2>What is Green Bull (GBTrade)?</h2>
            <ul className="feature-list">
              <li>Green Bull (GBTrade) is a comprehensive platform designed for <strong>Forex trading</strong> and building a network of business partners.</li>
              <li>It allows you to earn money through <strong>currency trading</strong> and by creating a team.</li>
              <li>Perfect for beginners and experienced traders alike.</li>
              <li><strong>Joining Fee</strong>: Starting from <strong>$100</strong> up to <strong>unlimited</strong>, with limitless earning opportunities.</li>
            </ul>
            
            <div className="income-types">
              <h3>Types of Income:</h3>
              <ol>
                <li>Trading Profit</li>
                <li>Magic Income (Trading Share Commission)</li>
                <li>Permanent Rewards</li>
                <li>Royalty Income</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Profit Section */}
      <section className="section trading-section">
        <div className="container">
          <h2>How Does Trading Profit Work?</h2>
          <div className="trading-content">
            <ul className="feature-list">
              <li>You can earn between <strong>10% to 40% monthly</strong> based on your investments and the market performance.</li>
              <li>Example:
                <ul>
                  <li>If you invest <strong>$100</strong>, you could earn <strong>$10–$40 monthly</strong> depending on trading success.</li>
                </ul>
              </li>
              <li><strong>Market Dependency</strong>: Profits vary based on market conditions.</li>
              <li>This is a great way to grow your wealth passively while you explore additional income options.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Magic Income Section */}
      <section className="section magic-income-section">
        <div className="container">
          <h2>Magic Income (Trading Share Commission)</h2>
          <div className="commission-content">
            <ul className="feature-list">
              <li>Earn commission by <strong>referring others</strong> to join GBTrade and helping your team generate sales.</li>
              <li>There are <strong>7 defined ranks</strong> in the GBTrade plan, and your income grows as you move up.</li>
            </ul>
            
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Sales Amount</th>
                    <th>Referral Commission</th>
                    <th>Level Income</th>
                    <th>Business Requirement</th>
                    <th>Leg Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {ranks.map((rank, index) => (
                    <tr key={index}>
                      <td>{rank.rank}</td>
                      <td>{rank.salesAmount}</td>
                      <td>{rank.referralCommission}</td>
                      <td>{rank.levelIncome}</td>
                      <td>{rank.businessRequirement}</td>
                      <td>{rank.legRatio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note"><strong>Note</strong>: The weakest leg automatically strengthens as investments grow.</p>
          </div>
        </div>
      </section>

      {/* Permanent Rewards Section */}
      <section className="section rewards-section">
        <div className="container">
          <h2>Permanent Rewards</h2>
          <h3>Achieve Milestones, Earn Cash Rewards</h3>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map((rank, index) => (
                  <tr key={index}>
                    <td>{rank.rank}</td>
                    <td>{rank.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Royalty Income Section */}
      <section className="section royalty-section">
        <div className="container">
          <h2>How Do You Earn Royalty Income?</h2>
          <div className="royalty-content">
            <ul className="feature-list">
              <li>Once you achieve higher ranks, you start earning a <strong>1% share of the company's profits</strong>.</li>
              <li>Royalty income is distributed equally among qualified members.</li>
              <li>Eligibility begins at the <strong>Silver rank and above</strong>.</li>
            </ul>
            
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Profit Share (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {ranks.slice(2).map((rank, index) => (
                    <tr key={index}>
                      <td>{rank.rank}</td>
                      <td>1%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="section terms-section">
        <div className="container">
          <h2>Terms and Conditions</h2>
          <div className="terms-content">
            <div className="key-conditions">
              <h3>Key Conditions to Keep in Mind:</h3>
              <ul>
                <li><strong>Minimum Withdrawal</strong>: $10 (must be in multiples of $10).</li>
                <li><strong>Withdrawal Days</strong>: Saturday and Sunday.</li>
                <li><strong>Processing Time</strong>: Withdrawal requests are processed within <strong>24–48 hours</strong>.</li>
              </ul>
            </div>

            <div className="business-maintenance">
              <h3>Business Maintenance:</h3>
              <ul className="feature-list">
                <li>You must maintain your rank and team performance weekly.</li>
                <li>If the business is down temporarily, commission earnings remain unaffected.</li>
                <li>To claim rank rewards, your business must be maintained for <strong>1 month</strong>.</li>
              </ul>
            </div>

            <div className="important-notes">
              <h3>Important Notes:</h3>
              <ul className="feature-list">
                <li>Withdrawals are allowed only after achieving milestone ranks to prevent system abuse.</li>
                <li>Regular updates ensure transparency and smooth functioning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section why-join-section">
        <div className="container">
          <h2>Why Join Green Bull (GBTrade)?</h2>
          <div className="reasons-content">
            <h3>Reasons to Join:</h3>
            <ol className="feature-list">
              <li><strong>Unlimited earning potential</strong> through Forex trading and networking.</li>
              <li>Attractive rewards and royalty income for consistent performers.</li>
              <li>Professional support and regular updates to help you grow.</li>
              <li>Transparent and easy-to-understand system with timely payments.</li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GreenBullPage;