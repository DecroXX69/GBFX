import React, { useState, useEffect } from 'react';
import './market-spreads.css';

const MarketSpreads = () => {
  const [activeCategory, setActiveCategory] = useState('Forex');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [marketData, setMarketData] = useState({
    Forex: [
      { pair: 'EUR-USD', flags: ['EU', 'US'], ask: '0.64156', bid: '0.64276', spread: '09' },
      { pair: 'GBP-USD', flags: ['GB', 'US'], ask: '0.64578', bid: '0.64228', spread: '17' },
      { pair: 'CAD-USD', flags: ['CA', 'US'], ask: '0.84535', bid: '0.64589', spread: '15' },
      { pair: 'RYL-USD', flags: ['SA', 'US'], ask: '0.84346', bid: '0.64514', spread: '13' },
      { pair: 'AUD-USD', flags: ['AU', 'US'], ask: '0.64191', bid: '0.64171', spread: '12' },
      { pair: 'NZD-USD', flags: ['NZ', 'US'], ask: '0.64123', bid: '0.64103', spread: '11' },
      { pair: 'JPY-USD', flags: ['JP', 'US'], ask: '0.84234', bid: '0.84214', spread: '10' },
      { pair: 'CHF-USD', flags: ['CH', 'US'], ask: '0.74234', bid: '0.74214', spread: '14' }
    ],
    Crypto: [
      { pair: 'BTC-USDT', ask: '104690', bid: '49900', spread: '100' },
      { pair: 'ETH-USDT', ask: '3500', bid: '3480', spread: '20' },
      { pair: 'LTC-USDT', ask: '200', bid: '195', spread: '5' },
      { pair: 'XRP-USDT', ask: '3.2', bid: '1.1', spread: '0.1' },
      { pair: 'ADA-USDT', ask: '1.5', bid: '1.45', spread: '0.05' },
      { pair: 'DOGE-USDT', ask: '0.08', bid: '0.078', spread: '0.002' },
      { pair: 'BNB-USDT', ask: '400', bid: '398', spread: '2' },
      { pair: 'SOL-USDT', ask: '100', bid: '98', spread: '2' }
    ],
    ShareCFDs: [
      { symbol: 'AAPL', price: '150', spread: '2' },
      { symbol: 'GOOGL', price: '2800', spread: '5' },
      { symbol: 'AMZN', price: '3500', spread: '3' },
      { symbol: 'MSFT', price: '300', spread: '1' },
      { symbol: 'TSLA', price: '700', spread: '4' },
      { symbol: 'NFLX', price: '600', spread: '6' },
      { symbol: 'NVDA', price: '650', spread: '2' },
      { symbol: 'SPY', price: '450', spread: '3' }
    ],
    Commodities: [
      { commodity: 'Gold', price: '1800', spread: '5' },
      { commodity: 'Silver', price: '25', spread: '0.2' },
      { commodity: 'Copper', price: '4', spread: '0.1' },
      { commodity: 'Oil', price: '60', spread: '1' },
      { commodity: 'Natural Gas', price: '3', spread: '0.05' },
      { commodity: 'Wheat', price: '8', spread: '0.2' },
      { commodity: 'Corn', price: '5', spread: '0.1' },
      { commodity: 'Soybeans', price: '13', spread: '0.3' }
    ],
    SpotMetals: [
      { metal: 'Silver', price: '25', spread: '0.2' },
      { metal: 'Platinum', price: '1000', spread: '5' },
      { metal: 'Palladium', price: '2000', spread: '15' },
      { metal: 'Copper', price: '4', spread: '0.1' },
      { metal: 'Gold', price: '1800', spread: '5' },
      { metal: 'Iron Ore', price: '120', spread: '2' },
      { metal: 'Zinc', price: '2', spread: '0.05' },
      { metal: 'Nickel', price: '15', spread: '0.3' }
    ],
    Energies: [
      { energy: 'Oil', price: '60', spread: '1' },
      { energy: 'Natural Gas', price: '3', spread: '0.05' },
      { energy: 'Coal', price: '50', spread: '2' },
      { energy: 'Electricity', price: '40', spread: '0.5' },
      { energy: 'Wind', price: '0.03', spread: '0.01' },
      { energy: 'Solar', price: '0.02', spread: '0.005' },
      { energy: 'Hydroelectric', price: '0.01', spread: '0.001' },
      { energy: 'Geothermal', price: '0.05', spread: '0.02' }
    ],
    Indices: [
      { index: 'S&P 500', price: '4000', spread: '10' },
      { index: 'Dow Jones', price: '35000', spread: '25' },
      { index: 'Nasdaq', price: '13500', spread: '15' },
      { index: 'FTSE 100', price: '7000', spread: '20' },
      { index: 'DAX', price: '15000', spread: '30' },
      { index: 'CAC 40', price: '6000', spread: '12' },
      { index: 'Hang Seng', price: '26000', spread: '40' },
      { index: 'Nikkei 225', price: '28000', spread: '35' }
    ]
  });

  const categories = [
    'Forex',
    'Crypto',
    'ShareCFDs',
    'Commodities',
    'SpotMetals',
    'Energies',
    'Indices'
  ];

  const updatePrice = (categoryData) => {
    return categoryData.map((item) => {
      const basePrice = parseFloat(item.ask || item.price || 0); // Use `ask` or `price` depending on the item
      if (!basePrice) return item; // Skip items without a valid price
  
      const priceChange = (Math.random() - 0.5) * 0.02; // Random change in price (up or down by up to 2%)
      const newPrice = basePrice * (1 + priceChange); // Apply the random change
      const priceDirection = priceChange > 0 ? 'up' : 'down'; // Determine price direction
  
      // Return the updated item with new prices
      return {
        ...item,
        ask: item.ask ? newPrice.toFixed(2) : undefined, // Update `ask` if it exists
        bid: item.bid ? (newPrice * 0.99).toFixed(2) : undefined, // Update `bid` if it exists
        price: item.price ? newPrice.toFixed(2) : undefined, // Update `price` if it exists
        priceDirection, // Add or update the price direction
      };
    });
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) => ({
        ...prevData,
        Forex: updatePrice(prevData.Forex),
        Crypto: updatePrice(prevData.Crypto),
        ShareCFDs: updatePrice(prevData.ShareCFDs),
        Commodities: updatePrice(prevData.Commodities),
        SpotMetals: updatePrice(prevData.SpotMetals),
        Energies: updatePrice(prevData.Energies),
        Indices: updatePrice(prevData.Indices),
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);  
  

  const getCategoryData = () => {
    switch (activeCategory) {
      case 'Forex':
        return marketData.Forex;
      case 'Crypto':
        return marketData.Crypto;
      case 'ShareCFDs':
        return marketData.ShareCFDs;
      case 'Commodities':
        return marketData.Commodities;
      case 'SpotMetals':
        return marketData.SpotMetals;
      case 'Energies':
        return marketData.Energies;
      case 'Indices':
        return marketData.Indices;
      default:
        return [];
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData => ({
        ...prevData,
        Forex: updatePrice(prevData.Forex),
        Crypto: updatePrice(prevData.Crypto),
        ShareCFDs: updatePrice(prevData.ShareCFDs),
        Commodities: updatePrice(prevData.Commodities),
        SpotMetals: updatePrice(prevData.SpotMetals),
        Energies: updatePrice(prevData.Energies),
        Indices: updatePrice(prevData.Indices),
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(getCategoryData().length / 5));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(getCategoryData().length / 5) - 1 : prev - 1));
  };
  

  return (
    <div className="market-spreads">
      <div className="container">
        <div className="header-section">
          <span className="trade-tag">TRADE NOW</span>
          <h1>Market Spreads and Swaps</h1>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="trading-pairs-container">
          <button className="nav-btn prev" onClick={prevSlide}>❮</button>
          <div className="trading-pairs">
            <div
              className="pairs-slider"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                gridTemplateColumns: `repeat(${Math.min(getCategoryData().length, 4)}, 1fr)`
              }}
            >
              {getCategoryData().map((item, index) => (
                <div key={index} className="pair-card">
                  <div className="pair-header">
                    <h3>{item.pair || item.symbol || item.commodity || item.metal || item.energy || item.index}</h3>
                  </div>
                  <div className="pair-details">
  {item.ask && item.bid ? (
    <>
      <div className="detail">
        <span>Ask</span>
        <span className={`value ${item.priceDirection === 'up' ? 'price-up' : 'price-down'}`}>
          {item.ask}
        </span>
      </div>
      <div className="detail">
        <span>Bid</span>
        <span className={`value ${item.priceDirection === 'up' ? 'price-up' : 'price-down'}`}>
          {item.bid}
        </span>
      </div>
    </>
  ) : (
    <div className="detail">
      <span>Price</span>
      <span className={`value ${item.priceDirection === 'up' ? 'price-up' : 'price-down'}`}>
        {item.price}
      </span>
    </div>
  )}
  <div className="detail">
    <span>Spread</span>
    <span className="value">{item.spread}</span>
  </div>
</div>

                  <button className="trade-btn">Trade</button>
                </div>
              ))}
            </div>
          </div>
          <button className="nav-btn next" onClick={nextSlide}>❯</button>
        </div>

        <div className="slider-dots">
          {Array(Math.ceil(getCategoryData().length / 5)).fill(0).map((_, i) => (
            <span
              key={i}
              className={`dot ${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSpreads;
