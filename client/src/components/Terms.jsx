import React, { useEffect } from 'react';
import styles from './Terms.module.css';
import { AlertTriangle, Clock, Calendar, DollarSign, Star, Info } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Terms = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,  // Animation occurs only once
            offset: 50   // Offset (in px) from the original trigger point
        });
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.mainTitle} data-aos="fade-down">Terms and Conditions</h1>
                
                <div className={styles.termsGrid}>
                    {/* Key Conditions Card */}
                    <div className={styles.termsCard} data-aos="fade-up" data-aos-delay="100">
                        <div className={styles.cardHeader}>
                            <AlertTriangle className={styles.cardIcon} />
                            <h2>Key Conditions</h2>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.conditionItem}>
                                <DollarSign className={styles.itemIcon} />
                                <div>
                                    <h3>Minimum Withdrawal</h3>
                                    <p>$10 (must be in multiples of $10)</p>
                                </div>
                            </div>
                            
                            <div className={styles.conditionItem}>
                                <Calendar className={styles.itemIcon} />
                                <div>
                                    <h3>Withdrawal Days</h3>
                                    <p>Saturday and Sunday only</p>
                                </div>
                            </div>
                            
                            <div className={styles.conditionItem}>
                                <Clock className={styles.itemIcon} />
                                <div>
                                    <h3>Processing Time</h3>
                                    <p>24–48 hours for all requests</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Maintenance Card */}
                    <div className={styles.termsCard} data-aos="fade-up" data-aos-delay="200">
                        <div className={styles.cardHeader}>
                            <Star className={styles.cardIcon} />
                            <h2>Business Maintenance</h2>
                        </div>
                        <div className={styles.cardContent}>
                            <ul className={styles.maintenanceList}>
                                <li>Weekly rank and team performance maintenance required</li>
                                <li>Commission earnings protected during temporary downtime</li>
                                <li>One month maintenance required for rank rewards</li>
                            </ul>
                        </div>
                    </div>

                    {/* Important Notes Card */}
                    <div className={styles.termsCard} data-aos="fade-up" data-aos-delay="300">
                        <div className={styles.cardHeader}>
                            <Info className={styles.cardIcon} />
                            <h2>Important Notes</h2>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.noteBox}>
                                <p>⚠️ Withdrawals only after achieving milestone ranks</p>
                                <p>🔄 Regular system updates for transparency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;