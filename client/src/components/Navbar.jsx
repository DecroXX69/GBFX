import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaHeadphones, FaSearch } from 'react-icons/fa';
import gb1 from '../assets/gb1.png';
import ForexTaperWidget from './tradingview.jsx';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.mainNavContent}>
            {/* Logo */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <img src={gb1} alt="GBTrade Logo" />
              </div>
              <div className={styles.brandName}>GBTrade</div>
            </div>

            {/* Desktop Menu */}
            <div className={styles.navMenu}>
              <Link to="/" className={styles.navLink}>Home</Link>
              <Link to="/trading" className={styles.navLink}>PAMM Account</Link>
              <Link to="/market" className={styles.navLink}>Join Our Program</Link>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
              <Link to="/calculator" className={styles.navLink}>Calculator</Link>
              <button className={styles.create1}>Login</button>
              <button className={styles.create}>Create Account</button>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleMobileMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/trading" onClick={() => setMobileMenuOpen(false)}>PAMM Account</Link>
              <Link to="/market" onClick={() => setMobileMenuOpen(false)}>Join Our Program</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/calculator" onClick={() => setMobileMenuOpen(false)}>Calculator</Link>
              <button className={styles.create1}>Login</button>
              <button className={styles.create}>Create Account</button>
            </div>
          )}
        </div>
        {/* Forex Widget */}
        <div className="forex-widget-section">
          <ForexTaperWidget />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
