import React from 'react';
import styles from './TradingAccounts.module.css';
import { 
  LayoutGrid, 
  BarChart3,
  MonitorPlay,
  BookOpen
} from 'lucide-react';

const TradingAccounts = () => {
  const accounts = [
    {
      icon: <LayoutGrid className={styles.icon} />,
      title: "Professional Account",
      description: "Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms"
    },
    {
      icon: <BarChart3 className={styles.icon} />,
      title: "Meta Trader 4 Account",
      description: "The primary feature of a trading overview account is its ability to aggregate information from multiple accounts and"
    },
    {
      icon: <MonitorPlay className={styles.icon} />,
      title: "Meta Trader 5 Account",
      description: "Trading demo accounts are particularly valuable for novice traders who are new to the world of investing."
    },
    {
      icon: <BookOpen className={styles.icon} />,
      title: "PAMM Account",
      description: "PAMM accounts also adhere to ethical guidelines that prohibit trading certain financial instruments deemed"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.tag}>ACCOUNT</span>
        <h1 className={styles.title}>Trading Accounts</h1>
      </div>
      
      <div className={styles.cardContainer}>
        {accounts.map((account, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {account.icon}
            </div>
            <h2 className={styles.accountTitle}>{account.title}</h2>
            <p className={styles.description}>{account.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingAccounts;