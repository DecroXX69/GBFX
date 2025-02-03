import React, { useEffect, useState, useLayoutEffect } from 'react';
import styles from "./GreenBullReferall.module.css";
import { Container, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle2, TrendingUp, Gift, Crown } from 'lucide-react';
import CountUp from 'react-countup';
import HowToBecomePAMM from './HowtoBecomePamm';
import Lottie from 'lottie-react';
import howToAnimation from './infinity-symbol.json';

const GreenBullPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeRow, setActiveRow] = useState(-1);
  const [expandedRank, setExpandedRank] = useState(-1);

  // Detect mobile/desktop based on window width
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const matchHandler = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', matchHandler);
    
    // Handle initial state
    if (mediaQuery.matches) setIsMobile(true);
    else setIsMobile(false);

    return () => mediaQuery.removeEventListener('change', matchHandler);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const ranks = [
    {
      rank: 'Beginner',
      investment: '$100',
      referralCommission: '15%',
      teamVolume: '$0',
      reward: 'N/A',
      description: 'Start your journey to financial freedom with just $100...'
    },
    {
      rank: 'Bronze',
      investment: '$500',
      referralCommission: '20%',
      teamVolume: '$10,000',
      reward: '$300',
      description: 'Level up to Bronze! Invest $500...'
    },
    {
      rank: 'Silver',
      investment: '$1,000',
      referralCommission: '23%',
      teamVolume: '$30,000',
      reward: '$1,000',
      description: 'Become a Silver leader! Invest $1K...'
    },
    {
      rank: 'Gold',
      investment: '$2,000',
      referralCommission: '26%',
      teamVolume: '$100,000',
      reward: '$4,000',
      description: 'Join the Gold elite!...'
    },
    {
      rank: 'Diamond',
      investment: '$5,000',
      referralCommission: '29%',
      teamVolume: '$500,000',
      reward: '$20,000',
      description: 'Diamond status awaits!...'
    },
    {
      rank: 'Platinum',
      investment: '$10,000',
      referralCommission: '32%',
      teamVolume: '$2,000,000',
      reward: '$80,000',
      description: 'Platinum is where legends are made...'
    },
    {
      rank: 'Advisor',
      investment: '$25,000',
      referralCommission: '35%',
      teamVolume: '$10,000,000',
      reward: '$400,000',
      description: 'Become a Platinum Advisor...'
    }
  ];

  const handleHover = (rowNumber) => {
    if (!isMobile) setActiveRow(rowNumber);
  };

  const handleClick = (index) => {
    if (isMobile) setExpandedRank(index);
  };

  const incomeStreams = [
    {
      Icon: CheckCircle2,
      title: "Trading Income",
      description: "Earn 10-40% monthly returns on your investments *."
    },
    {
      Icon: Gift,
      title: "Referral Income",
      description: "Up to 35% commission on team trading volume *."
    },
    {
      Icon: TrendingUp,
      title: "Royalty Income",
      description: "Share in 1% of company profits from Silver+"
    },
    {
      Icon: Crown,
      title: "Milestone Rewards",
      description: "Cash bonuses up to $400,000 for achieving ranks *."
    }
  ];

  return (
    <div className={styles.gbContainer}>
      {/* Hero Section */}
      <div className={styles.miniHero1}>
        <Container>
          <div className={styles.breadcrumbWrapper1}>
            <span className={styles.homeLink1}>Home</span>
            <span className={styles.separator1}> / </span>
            <span className={styles.currentPage1}>Join Our Program</span>
          </div>
          <h1 className={styles.heroTitle1}>Join Our Program</h1>
        </Container>
      </div>

      <div className={styles.heroSection} data-aos="fade-zoom-in">
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Start with as Low as $100 <br />
            </h1>
            <h2 className={styles.heroTitle}>
              <span style={{ color: 'rgb(5, 23, 71)' }}>Grow it To</span>
              <div className={styles.infiniteWrapper}>
                <Lottie 
                  animationData={howToAnimation} 
                  loop={true} 
                  style={{ width: '40%', height: 'auto' }} 
                />
              </div>
            </h2>
            <p className={styles.heroDescription}>
              <b>Join our elite community...</b>
            </p>
            <a href="/Authentication" className={styles.ctaButton}>
              Start Your Journey →
            </a>
          </div>
        </Container>
      </div>

      <HowToBecomePAMM />
{/* Income Streams Section */}
<section className={styles.incomeStreams} data-aos="slide-left">
        <Container>
          <div className={styles.incomeGridWrapper}>
            <h1 className={styles.sectionTitle}>How You Earn</h1>
            <div className={styles.incomeGrid}>
              {incomeStreams.map((stream, index) => (
                <div key={index} className={styles.incomeCard}>
                  {React.createElement(stream.Icon, { 
                    className: styles.incomeIcon,
                    color: stream.color || "#4CAF50"
                  })}
                  <h3 className={styles.incomeTitle}>{stream.title}</h3>
                  <p>{stream.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* Rank Progression Section */}
      <section className={styles.rankProgression} data-aos="zoom-in">
        <Container>
          <h2 className={styles.sectionTitle}>Guide To Ranks</h2>

          {/* First Row */}
          <div
            className={styles.rankProgression4}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHover(-1)}
          >
            {ranks.slice(0, 4).map((rank, index) => (
              <div
                key={index}
                className={`${styles.rankCard} ${styles['rank-' + index]} ${
                  (isMobile ? expandedRank === index : activeRow === 0) ? styles.expanded : ''
                }`}
                onClick={() => handleClick(index)}
              >
                <div className={styles.rankBadge}>
                  <Crown className={styles.rankIcon} color="white" />
                  <span className={styles.rankName}>{rank.rank}</span>
                </div>
                <h3 className={styles.rankEarnings}>
                  Earn up to <CountUp end={parseInt(rank.referralCommission)} duration={1} />%
                </h3>
                <p className={styles.rankDetails} style={{fontWeight:'bold'}}>
                  Invest as low as {rank.investment}
                </p>
                <div className={styles.rankReward} style={{fontWeight:'bold'}}>
                  <Gift className={styles.rankIcon} color="#FFD700" />&nbsp;
                  {rank.reward}
                </div>
                <p className={styles.rankDescription}>{rank.description}</p>

                <div className={styles.rankRequirements}>
                  <strong>Requirements:</strong>
                  <p style={{fontWeight:'bold'}}>Investment: {rank.investment}</p>
                  <p>Team Volume: {rank.teamVolume}</p>
                  <p>Referral Commission: {rank.referralCommission}</p>
                  <p style={{fontWeight:'bold'}}>Reward: {rank.reward}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div
            className={styles.rankProgression3}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(-1)}
          >
            {ranks.slice(4).map((rank, localIndex) => (
              <div
                key={localIndex}
                className={`${styles.rankCard} ${styles['rank-' + (4 + localIndex)]} ${
                  (isMobile ? expandedRank === (4 + localIndex) : activeRow === 1) ? styles.expanded : ''
                }`}
                onClick={() => handleClick(4 + localIndex)}
              >
                <div className={styles.rankBadge}>
                  <Crown className={styles.rankIcon} color="white" />
                  <span className={styles.rankName}>{rank.rank}</span>
                </div>
                <h3 className={styles.rankEarnings}>
                  Earn up to <CountUp end={parseInt(rank.referralCommission)} duration={1} />%
                </h3>
                <p className={styles.rankDetails} style={{fontWeight:'bold'}}>
                  Invest as low as {rank.investment}
                </p>
                <div className={styles.rankReward} style={{fontWeight:'bold'}}>
                  <Gift className={styles.rankIcon} color="#FFD700" />&nbsp;
                  {rank.reward}
                </div>
                <p className={styles.rankDescription}>{rank.description}</p>

                <div className={styles.rankRequirements}>
                  <strong>Requirements:</strong>
                  <p style={{fontWeight:'bold'}}>Investment: {rank.investment}</p>
                  <p>Team Volume: {rank.teamVolume}</p>
                  <p>Referral Commission: {rank.referralCommission}</p>
                  <p style={{fontWeight:'bold'}}>Reward: {rank.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className={styles.joinSection} id="join-now">
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.sectionTitle}>Ready to Transform Your Finances?</h2>
            <p className={styles.ctaText}>
              Start with as little as $100 and grow your income exponentially
            </p>
            <a href="/Authentication" className={styles.ctaButton}>
              Join Green Bull Now →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GreenBullPage;