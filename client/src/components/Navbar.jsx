// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { FaHeadphones, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* Top Navbar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.phoneInfo}>
              <FaHeadphones className={styles.headphoneIcon} />
              <span>+91 12345 67890</span>
            </div>
            <div className={styles.authButtons}>
              <button className={styles.openAccountBtn}>Open Account</button>
              <button className={styles.loginBtn}>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.mainNavContent}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span>GB</span>
              </div>
              <div className={styles.brandName}>GBFX</div>
            </div>
            
            <div className={styles.navMenu}>
              <a href="/" className={styles.navLink}>Home</a>
              <a href="/trading" className={styles.navLink}>PAMM Account</a>
              {/* <a href="/market" className={styles.navLink}>Market</a>
              <a href="/pages" className={styles.navLink}>Pages</a>
              <a href="/blog" className={styles.navLink}>Blog</a> */}
              <a href="/contact" className={styles.navLink}>Contact</a>
              <button className={styles.searchBtn}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;