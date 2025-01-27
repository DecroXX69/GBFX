import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import GBFX from '../assets/GBFX.png';

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
            <a href="/pamm">PAMM Account</a>
            <a href="/join">Join Our Program</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact">Terms & Conditions</a>

          </nav>

          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} GBFX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;