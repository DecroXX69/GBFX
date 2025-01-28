import React from 'react';
import styles from './TradingAccounts.module.css';
import { 
  DollarSign,
  Briefcase,
  Users,
  BarChart
} from 'lucide-react';

const TradingAccounts = () => {
  const highlights = [
    {
      icon: <DollarSign className={styles.icon} />,
      title: "What is GB Trade?",
      description: "A revolutionary platform for Forex trading, financial growth, and creating a strong network of business partners."
    },
    {
      icon: <Briefcase className={styles.icon} />,
      title: "Tailored for Everyone",
      description: "Whether you're a beginner or an expert trader, GB Trade equips you with the tools you need to thrive."
    },
    {
      icon: <Users className={styles.icon} />,
      title: "Membership Fee",
      description: "Get started with as little as $100 and unlock the potential for limitless financial growth."
    },
    {
      icon: <BarChart className={styles.icon} />,
      title: "4 Income Streams",
      description: (
        <>
          1. Trading Profit<br />
          2. Magic Income (Trading Share Commission)<br />
          3. Permanent Rewards<br />
          4. Royalty Income
        </>
      )
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}><i>"Every great fortune starts with a small decision. Let today be the day you decide to build your financial future."</i></h1>
      </div>
      
      <div className={styles.cardContainer}>
        {highlights.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingAccounts;
