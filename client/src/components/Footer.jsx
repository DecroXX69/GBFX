import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import GBFX from '../assets/GBFX.png';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       

        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <img src={GBFX} alt="GBFX Logo" className={styles.bottomLogo} />
          </div>

          <nav className={styles.mainNav}>
            <a href="/">Home</a>
            <a href="/trading">PAMM Account</a>
            <a href="/market">Join Our Program</a>
            <a href="/contact">Contact Us</a>
            <a href="/terms">Terms & Conditions</a>

          </nav>

          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://x.com/GBTradeglobal?t=4M6ODj8a6FLO-NtDDfPtww&s=08 " target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={20} />
            </a>
            <a href="https://t.me/gbtradechat" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={20} />
            </a>
            <a href="https://www.instagram.com/gbtrade25" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@gbtradeofficial" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
              </a>
            
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} GBFX. All rights reserved....
        </div>
      </div>
    </footer>
  );
};

export default Footer;