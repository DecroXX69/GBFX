import React from 'react';
import './TradeCard.css';
import cryptoImg from '../assets/crypto.png';
import sharesImg from '../assets/shares.png';
import goldImg from '../assets/gold.png';
import currencyImg from '../assets/currency.png';
import silverImg from '../assets/silver.png';

const TradeCard = () => {
  const trades = [
    {
      title: 'Crypto Trading',
      description: 'Explore decentralized assets and trade Bitcoin and altcoins seamlessly.',
      img: cryptoImg,
    },
    {
      title: 'Shares Trading',
      description: 'Access global markets and invest in top companies for steady growth.',
      img: sharesImg,
    },
    {
      title: 'Gold Trading',
      description: 'Secure your wealth by investing in gold, the ultimate hedge Vs inflation.',
      img: goldImg,
    },
    {
      title: 'Currency Trading',
      description: 'Navigate the forex market to trade global currencies and capitalize on trends.',
      img: currencyImg,
    },
    {
      title: 'Silver Trading',
      description: 'Diversify your portfolio with silver, a reliable store of value in turbulent times.',
      img: silverImg,
    },
  ];

  return (
 
    <div className="trade-container">
         <span class="sub-title mb_14">
       Trading Platforms
      </span>
      <h2>Things We Trade</h2>

      <div className="trade-card-wrapper">
        {trades.map((trade, index) => (
          <div key={index} className="trade-card">
            <img src={trade.img} alt={trade.title} />
            <div className="trade-content">
              <h3>{trade.title}</h3>
              <p className="trade-description">{trade.description}</p>
              <button className="trade-now-button">Trade Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCard;
