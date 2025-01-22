import React, { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Globe, Shield, TrendingUp } from 'lucide-react';
import styles from './About.module.css';
import growthimg from '../assets/growth-investment.jpg';

const AboutUs = () => {
  const [openSection, setOpenSection] = useState('who');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  // const Stats = () => (
  //   <div className={styles.statsContainer}>
  //     <div className={styles.statItem}>
  //       <DollarSign className={styles.statIcon} />
  //       <h4>$5B+</h4>
  //       <p>Trading Volume</p>
  //     </div>
  //     <div className={styles.statItem}>
  //       <Globe className={styles.statIcon} />
  //       <h4>50+</h4>
  //       <p>Countries</p>
  //     </div>
  //     <div className={styles.statItem}>
  //       <Shield className={styles.statIcon} />
  //       <h4>15+</h4>
  //       <p>Years Experience</p>
  //     </div>
  //     <div className={styles.statItem}>
  //       <TrendingUp className={styles.statIcon} />
  //       <h4>100K+</h4>
  //       <p>Active Traders</p>
  //     </div>
  //   </div>
  // );

  const Section = ({ id, title, content }) => (
    <div className={styles.sectionContainer}>
      <button
        onClick={() => toggleSection(id)}
        className={`${styles.sectionButton} ${openSection === id ? styles.active : ''}`}
      >
        <h3 className={styles.sectionTitle}>{title}</h3>
        {openSection === id ? (
          <ChevronUp className={styles.chevron} />
        ) : (
          <ChevronDown className={styles.chevron} />
        )}
      </button>
      {openSection === id && (
        <div className={styles.sectionContent}>
          <div className={styles.prose}>
            {content}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.grid}></div>
      </div>
      
      <div className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            {/* <nav className={styles.breadcrumb}>
              <span>Home</span>
              <span className={styles.separator}>-</span>
              <span className={styles.active}>About Us</span>
            </nav>
            <h1 className={styles.mainTitle}>About Us</h1> */}
            <div className={styles.badge}>ABOUT US</div>
            <h2 className={styles.subtitle}>
              Our reputation is built on{' '}
              <span className={styles.highlight}>Experience</span>
            </h2>

            {/* <Stats /> */}

            <div className={styles.sectionsContainer}>
              <Section
                id="who"
                title="Who we are?"
                content={
                  <div className={styles.sectionText}>
                    <p>
                      GBFX is a leading global forex and financial services provider with over 15 years of industry experience. Founded in 2008, we've grown to serve clients across 50+ countries, providing secure and efficient international financial solutions.
                    </p>
                    <p>
                      Our team consists of experienced financial professionals, market analysts, and customer service experts dedicated to delivering exceptional trading experiences. We maintain strict regulatory compliance and implement robust security measures to protect our clients' interests.
                    </p>
                    <p>
                      With offices in major financial hubs and a strong digital presence, we combine global reach with local expertise to serve our diverse client base.
                    </p>
                  </div>
                }
              />

              <Section
                id="what"
                title="What we do?"
                content={
                  <div className={styles.sectionText}>
                    <ul>
                      <li>Forex Trading: Access to 100+ currency pairs with competitive spreads</li>
                      <li>International Payments: Fast and secure cross-border transactions</li>
                      <li>Credit Card Services: Multi-currency cards for global transactions</li>
                      <li>Financial Consulting: Expert guidance for trading and investment strategies</li>
                      <li>Market Analysis: Daily market insights and trading recommendations</li>
                      <li>Educational Resources: Comprehensive trading courses and webinars</li>
                    </ul>
                  </div>
                }
              />

              <Section
                id="how"
                title="How it works?"
                content={
                  <div className={styles.sectionText}>
                    <ol>
                      <li>
                        <strong>Account Setup</strong>
                        <p>Complete our streamlined verification process and choose your account type based on your trading needs.</p>
                      </li>
                      <li>
                        <strong>Fund Your Account</strong>
                        <p>Multiple secure funding options available including bank transfer, credit cards, and digital payments.</p>
                      </li>
                      <li>
                        <strong>Start Trading</strong>
                        <p>Access our advanced trading platforms with real-time market data and execute trades with instant order processing.</p>
                      </li>
                      <li>
                        <strong>Ongoing Support</strong>
                        <p>24/7 customer support, personalized account management, and continuous trading education.</p>
                      </li>
                    </ol>
                  </div>
                }
              />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={growthimg} 
                alt="Growth Investment Concept" 
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
