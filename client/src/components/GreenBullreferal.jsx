import React, { useEffect } from 'react';
import styles from './GreenBull.module.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GreenBullPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
      levelIncome: '3%',
      businessRequirement: '$30,000',
      legRatio: '40:40:20',
      reward: '$1,000'
    },
    {
      rank: 'Gold',
      salesAmount: '$2,000',
      referralCommission: '26%',
      levelIncome: '3%',
      businessRequirement: '$100,000',
      legRatio: '40:40:20',
      reward: '$4,000'
    },
    {
      rank: 'Diamond',
      salesAmount: '$5,000',
      referralCommission: '29%',
      levelIncome: '3%',
      businessRequirement: '$500,000',
      legRatio: '40:40:20',
      reward: '$20,000'
    },
    {
      rank: 'Platinum',
      salesAmount: '$10,000',
      referralCommission: '32%',
      levelIncome: '3%',
      businessRequirement: '$2,000,000',
      legRatio: '40:40:20',
      reward: '$80,000'
    },
    {
      rank: 'Advisor',
      salesAmount: '$25,000',
      referralCommission: '35%',
      levelIncome: '3%',
      businessRequirement: '$10,000,000',
      legRatio: '40:40:20',
      reward: '$400,000'
    }
  ];

  return (
    <div className={styles.gbContainer}>
      <div className={styles.miniHero}>
        <Container>
          <div className={styles.breadcrumbWrapper}>
            <span className={styles.homeLink}>Home</span>
            <span className={styles.separator}> / </span>
            <span className={styles.currentPage}>Join Our Program</span>
          </div>
          <h1 className={styles.heroTitle}>Join Our Program</h1>
        </Container>
      </div>

      {/* Introduction Section */}
      <section className={`${styles.section} ${styles.introSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Introduction to Green Bull <span>(GBTrade)</span></h1>
          <div className={styles.introContent}>
            <h2>What is Green Bull (GBTrade)?</h2>
            <ul className={styles.featureList}>
              <li>Green Bull (GBTrade) is a comprehensive platform designed for <strong>Forex trading</strong> and building a network of business partners.</li>
              <li>It allows you to earn money through <strong>currency trading</strong> and by creating a team.</li>
              <li>Perfect for beginners and experienced traders alike.</li>
              <li><strong>Joining Fee</strong>: Starting from <strong>$100</strong> up to <strong>unlimited</strong>, with limitless earning opportunities.</li>
            </ul>
            
            <div className={styles.incomeTypes}>
              <h3>Types of Income:</h3>
              <ul className={styles.featureList}>
                <li>Trading Profit</li>
                <li>Magic Income (Trading Share Commission)</li>
                <li>Permanent Rewards</li>
                <li>Royalty Income</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Profit Section */}
      <section className={`${styles.section} ${styles.tradingSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>How Does Trading Profit Work?</h2>
          <div className={styles.tradingContent}>
            <ul className={styles.featureList}>
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
      <section className={`${styles.section} ${styles.magicIncomeSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>Magic Income (Trading Share Commission)</h2>
          <div className={styles.commissionContent}>
            <ul className={styles.featureList}>
              <li><h3>"When you empower others, you empower yourself. Together, we grow stronger."</h3></li>
              <li>Earn commission by <strong>referring others</strong> to join GBTrade and helping your team generate sales.</li>
              <li>There are <strong>7 defined ranks</strong> in the GBTrade plan, and your income grows as you move up.</li>
            </ul>
            
            <div className={styles.tableResponsive}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Self Account</th>
                    <th>Self Percentage</th>
                    <th>Differential</th>
                    <th>Business Requirement</th>
                    <th>Ratio in 3 Legs</th>
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
              </Table>
            </div>
            <p className={styles.note}><strong>Note</strong>: The weakest leg automatically strengthens as investments grow.</p>
          </div>
        </div>
      </section>

      {/* Permanent Rewards Section */}
      <section className={`${styles.section} ${styles.rewardsSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>Permanent Rewards</h2>
          <h3>Achieve Milestones, Earn Cash Rewards</h3>
          <div className={styles.tableResponsive}>
            <Table striped bordered hover>
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
            </Table>
          </div>
        </div>
      </section>

      {/* Royalty Income Section */}
      <section className={`${styles.section} ${styles.royaltySection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>How Do You Earn Royalty Income?</h2>
          <div className={styles.royaltyContent}>
            <ul className={styles.featureList}>
              <li>Once you achieve higher ranks, you start earning a <strong>1% share of the company's profits</strong>.</li>
              <li>Royalty income is distributed equally among qualified members.</li>
              <li>Eligibility begins at the <strong>Silver rank and above</strong>.</li>
            </ul>
            
            <div className={styles.tableResponsive}>
              <Table striped bordered hover>
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
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className={`${styles.section} ${styles.termsSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>Terms and Conditions</h2>
          <div className={styles.termsContent}>
            <div className={styles.keyConditions}>
              <h2>Key Conditions to Keep in Mind:</h2>
              <ul>
                <li><strong>Minimum Withdrawal</strong>: $10 (must be in multiples of $10).</li>
                <li><strong>Withdrawal Days</strong>: Saturday and Sunday.</li>
                <li><strong>Processing Time</strong>: Withdrawal requests are processed within <strong>24–48 hours</strong>.</li>
              </ul>
            </div>

            <div className={styles.businessMaintenance}>
              <h2>Business Maintenance:</h2>
              <ul className={styles.featureList}>
                <li>You must maintain your rank and team performance weekly.</li>
                <li>If the business is down temporarily, commission earnings remain unaffected.</li>
                <li>To claim rank rewards, your business must be maintained for <strong>1 month</strong>.</li>
              </ul>
            </div>

            <div className={styles.importantNotes}>
              <h2>Important Notes:</h2>
              <ul className={styles.featureList}>
                <li>Withdrawals are allowed only after achieving milestone ranks to prevent system abuse.</li>
                <li>Regular updates ensure transparency and smooth functioning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className={`${styles.section} ${styles.whyJoinSection}`} data-aos="fade-up">
        <div className={styles.container}>
          <h2>Why Join Green Bull (GBTrade)?</h2>
          <div className={styles.reasonsContent}>
            <h3>Reasons to Join:</h3>
            <ul className={styles.featureList}>
              <li><strong>Unlimited earning potential</strong> through Forex trading and networking.</li>
              <li>Attractive rewards and royalty income for consistent performers.</li>
              <li>Professional support and regular updates to help you grow.</li>
              <li>Transparent and easy-to-understand system with timely payments.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenBullPage;