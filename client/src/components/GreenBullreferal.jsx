// GreenBullPage.jsx
import React, { useEffect } from 'react';
import styles from "./GreenBullReferall.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle2, TrendingUp, Gift, Crown } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';

const GreenBullPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const ranks = [
    {
      rank: ' Beginner',
      referralCommission: '15%',
      salesAmount: '$100',
      reward: 'N/A',
      description: 'Start your journey with our beginner-friendly platform'
    },
    {
      rank: ' Bronze',
      referralCommission: '20%',
      salesAmount: '$500',
      reward: '$300 ',
      description: 'One Time Permanent Reward*'
    },
    {
      rank: ' Silver',
      referralCommission: '23%',
      salesAmount: '$1,000',
      reward: '$1,000 Reward',
      description: 'One Time Permanent Reward*'
    },
    {
      rank: ' Gold',
      referralCommission: '26%',
      salesAmount: '$2,000',
      reward: '$4,000 Reward',
      description: 'One Time Permanent Reward*'
    },
    {
      rank: ' Diamond',
      referralCommission: '29%',
      salesAmount: '$5,000',
      reward: '$20,000 Reward',
      description: 'One Time Permanent Reward*'
    },
    {
      rank: ' Platinum',
      referralCommission: '32%',
      salesAmount: '$10,000',
      reward: '$80,000 Reward',
      description: 'One Time Permanent Reward*'
    },
    {
      rank: ' Advisor',
      referralCommission: '35%',
      salesAmount: '$25,000',
      reward: '$400,000 Reward',
      description: 'One Time Permanent Reward*'
    }
  ];

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
              Unlock Your Financial Potential <br />
              <span className={styles.heroSubtitle}>with</span>
              <h2 className={styles.heroTitle}><span style={{color:'rgb(5, 23, 71)'}}>GB</span>
              <span style={{color:'rgb(29, 80, 19)'}}>Trade</span></h2>   

            </h1>
            <p className={styles.heroDescription}>
            <b> Join our elite community and start earning passive income today</b><br />
            </p>
            <a href="#join-now" className={styles.ctaButton}>
              Start Your Journey →
            </a><br />
          </div>
        </Container>
      </div>

      {/* Rank Progression Section */}
      <section className={styles.rankProgression} data-aos="zoom-in">
        <Container>
          <h2 className={styles.sectionTitle}>Your Path to Wealth</h2>

          <div className={styles.rankProgression4}>
            {ranks.slice(0, 4).map((rank, index) => (
              <div 
                className={`${styles.rankCard} ${styles['rank-' + index]}`}
                key={index}
              >
                <div className={styles.rankBadge}>
                  <Crown className={styles.rankIcon} color="white" />
                  <span className={styles.rankName}>{rank.rank}</span>
                </div>
                <h3 className={styles.rankEarnings}>
                  Earn up to <CountUp end={parseInt(rank.referralCommission)} duration={1} />%
                </h3>
                <p className={styles.rankDetails}>
                  Invest as low as {rank.salesAmount}
                </p>
                <div className={styles.rankReward}>
                  <Gift className={styles.rankIcon} color="#FFD700" />&nbsp;
                  {rank.reward}
                </div>
                <p className={styles.rankDescription}>{rank.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.rankProgression3}>
            {ranks.slice(4).map((rank, index) => (
              <div 
                className={`${styles.rankCard} ${styles['rank-' + (index + 4)]}`}
                key={index}
              >
                <div className={styles.rankBadge}>
                  <Crown className={styles.rankIcon} color="white" />
                  <span className={styles.rankName}>{rank.rank}</span>
                </div>
                <h3 className={styles.rankEarnings}>
                  Earn up to <CountUp end={parseInt(rank.referralCommission)} duration={1} />%
                </h3>
                <p className={styles.rankDetails}>
                  Invest as low as {rank.salesAmount}
                </p>
                <div className={styles.rankReward}>
                  <Gift className={styles.rankIcon} color="#FFD700" />&nbsp;
                  {rank.reward}
                </div>
                <p className={styles.rankDescription}>{rank.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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

      {/* CTA Section */}
      <section className={styles.joinSection} id="join-now" data-aos="zoom-out">
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.sectionTitle}>Ready to Transform Your Finances?</h2>
            <p className={styles.ctaText}>
              Start with as little as $100 and grow your income exponentially
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Join Green Bull Now →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GreenBullPage;