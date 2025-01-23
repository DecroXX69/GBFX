import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      quote: '"Crypto investor makes my investment work efficient and pleasant"',
      author: 'Roger Federal',
      image: client1,
      description: 'Uses Saxolvestor',
    },
    {
      quote: '"GBFXs cutting-edge app is a game-changer for my portfolio management"',
      author: 'John Doe',
      image: client2,
      description: 'Uses Saxolvestor',
    },
    {
      quote: '"I have never had a smoother trading experience than with FXT"',
      author: 'Jane Smith',
      image: client3,
      description: 'Uses Saxolvestor',
    },
    {
      quote: '"GBFXs advanced analytics give me the edge I need to dominate the markets"',
      author: 'Bob Johnson',
      image: client4,
      description: 'Uses Saxolvestor',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleJumpToIndex = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={styles.testimonials}>
        <div className='container'> <div className={styles.badge}>Testimonials</div></div>
      <h2 className={styles.title}>Love from Clients</h2>
      <div className={styles.container}>
        <div className={styles.testimonialContainer}>
          <img src={currentTestimonial.image} alt={currentTestimonial.author} className={styles.image} />
          <div className={styles.content}>
            <p className={styles.quote}>{currentTestimonial.quote}</p>
            <p className={styles.author}>{currentTestimonial.author}</p>
            <p className={styles.description}>{currentTestimonial.description}</p>
          </div>
        </div>
        <div className={styles.navigation}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.navButton} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => handleJumpToIndex(index)}
            >
              <div
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;