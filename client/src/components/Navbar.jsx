// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaHeadphones, FaSearch } from 'react-icons/fa';
import gb1 from '../assets/gb1.png';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.mainNavContent}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <img src={gb1} alt="GBTrade Logo" />
              </div>
              <div className={styles.brandName}>GBTrade</div>
            </div>
            
            <div className={styles.navMenu}>
              <Link to="/" className={styles.navLink}>Home</Link>
              <Link to="/trading" className={styles.navLink}>PAMM Account</Link>
              <Link to="/market" className={styles.navLink}>Join Our Program</Link>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
              <Link to="/calculator" className={styles.navLink}>Calculator</Link>
              <button className={styles.create1}>
                Login
              </button>
              <button className={styles.create}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;