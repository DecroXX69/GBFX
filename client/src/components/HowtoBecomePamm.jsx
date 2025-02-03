// HowToBecomePAMM.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import styles from './HowToBecomePAMM.module.css';

const HowToBecomePAMM = () => {
  return (
    <section className={styles.howToSection}>
      <Container>
        <h2 className={styles.sectionTitle}>How to Get Started</h2>
        
        <motion.div 
          className={styles.stepsWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <Row className="gx-4 gy-4">
            {[
              {
                
                title: 'Sign Up',
                description: 'Join our platform with a minimum investment of $100',
              },
              {
               
                title: 'Refer Clients',
                description: 'Share your unique link and grow your network',
              },
              {
              
                title: 'Earn Commissions',
                description: 'Start earning passive income from your referrals',
              },
              {
               
                title: 'Rank Progression',
                description: 'Level up and multiply your earning potential with each rank',

              }
            ].map((step) => (
              <Col md={3} key={step.step} className="d-flex align-items-center">
                <div className={styles.stepCard}>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>

        

      </Container>
    </section>
  );
};

export default HowToBecomePAMM;