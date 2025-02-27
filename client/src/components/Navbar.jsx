import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
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
              <a href='/HomePage'>   <img src={gb1} alt="GBTrade Logo" /></a>
              </div>
              <a href='/HomePage' style={{textDecoration:'none'}}> <div className={styles.brandName}><span style={{ color: '#051747' }}>GB</span>
              <span style={{ color: '#1d5013' }}>Trade</span></div></a>
            </div>

            {/* Desktop Menu */}
            <div className={styles.navMenu}>
              <Link to="/HomePage" className={styles.navLink}>Home</Link>
              <Link to="/trading" className={styles.navLink}>PAMM Account</Link>
              <Link to="/market" className={styles.navLink}>Join Our Program</Link>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
              <a href="https://www.thecalculatorsite.com/finance/calculators/daily-compound-interest.php" target="_blank" className={styles.navLink}>Calculator</a>
              <a href="/Authentication" 
                 className={styles.create} 
                 style={{ textDecoration: 'none' }}>
                Login
              </a>

              {/* <button className={styles.create}>Create Account</button> */}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleMobileMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            <Link to="/HomePage" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/trading" onClick={() => setMobileMenuOpen(false)}>PAMM Account</Link>
            <Link to="/market" onClick={() => setMobileMenuOpen(false)}>Join Our Program</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/calculator" onClick={() => setMobileMenuOpen(false)}>Calculator</Link>
            <a href="/Authentication" 
                 className={styles.create} 
                 style={{ textDecoration: 'none' }}>
                Login
              </a>
            {/* <button className={styles.create}>Create Account</button> */}
          </div>
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
