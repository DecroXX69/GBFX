import React from 'react';
import styles from './Footer.module.css';
import amex from '../assets/amex.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import discover from '../assets/discover.png';
import gpay from '../assets/gpay.png';
import paypal from '../assets/paypal.png';
// import applepay from '../assets/logos/applepay.png';
// import windows from '../assets/logos/windows.png';
// import android from '../assets/logos/android.png';
// import qrcode from '../assets/logos/qr-code.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeWrapper}>
        <div className={styles.container}>
          <div className={styles.subscribe}>
            <h2 style={{color:"white"
            }}>Subscribe for latest update</h2>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Email Address" />
              <button>Subscribe →</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">PAMM Account</a>
            <a href="#">Join Our Program</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
            <a href="#">Create Account</a>
          </div>
{/* 
          <div className={styles.footerSection}>
            <h3>Platforms</h3>
            <a href="/forex">Forex</a>
            <a href="/crypto-cfds">Crypto CFDs</a>
            <a href="/share-cfds">Share CFDs</a>
            <a href="/commodities">Commodities</a>
            <a href="/spot-metals">Spot Metals</a>
            <a href="/energies">Energies</a>
            <a href="/metatrader-5">MetaTrader 5</a>
          </div> */}

          {/* <div className={styles.footerSection}>
            <h3>Trading Tools</h3>
            <a href="/fxt-navigator">FXT Navigator</a>
            <a href="/trading-central">Trading Central</a>
            <a href="/economic-calendar">Economic Calendar</a>
            <a href="/market-sentiment">Market Sentiment</a>
            <a href="/api-trading">API Trading</a>
            <a href="/vps">VPS</a>
            <a href="/cdf-rollover">CDF Rollover</a>
          </div> */}

          {/* <div className={styles.footerSection}>
            <h3>Support</h3>
            <a href="/legal-information">Legal Information</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/regulations">Regulations</a>
            <a href="/risk-disclaimer">Risk Disclaimer</a>
            <a href="/complaints">Complaints Procedure</a>
            <a href="/news">Company News</a>
            <a href="/videos">Trading Videos</a>
          </div> */}

          <div className={styles.appSection}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="GBFX Logo" />
            </div>
            <p>Trade multipliers on our app.</p>
            <div className={styles.qrCode}>
              <img src="/images/qr-code.png" alt="QR Code" />
            </div>
            <div className={styles.platforms}>
              <img src="/images/apple.png" alt="iOS" />
              <img src="/images/windows.png" alt="Windows" />
              <img src="/images/android.png" alt="Android" />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.bottomLogo}>
              <img src="/images/logo.png" alt="GBFX Logo" />
            </div>
            <div className={styles.payments}>
              <span>We Accept:</span>
              <div className={styles.paymentIcons}>
                <img src={amex} alt="Amex" />
                <img src={visa} alt="Visa" />
                <img src={paypal} alt="PayPal" />
                <img src={mastercard} alt="Mastercard" />
                <img src={discover} alt="Discover" />
                <img src={gpay} alt="Google Pay" />
              </div>
            </div>
          </div>
          
        </div>
        <div className={styles.copyright}>
            Copyright 2025 GBFX All Rights Reserved.
            </div>
          <div className={styles.social}>
            <span>Follow Us On:</span>
            <a href="#"><img src="/images/social/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/social/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/social/dribbble.png" alt="Dribbble" /></a>
            <a href="#"><img src="/images/social/linkedin.png" alt="LinkedIn" /></a>
          </div>
          </div>
     
      
    </footer>
  );
};

export default Footer;