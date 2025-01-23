import React, { useState, useEffect } from 'react';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import './MarketSpreadsAndSwaps.css';

const initialData = {
  Forex: [
    { pair: "EUR-USD", flags: ["EU", "US"], ask: "0.64156", bid: "0.64276", spread: "09" },
    { pair: "GBP-USD", flags: ["GB", "US"], ask: "0.64578", bid: "0.64228", spread: "17" },
    { pair: "CAD-USD", flags: ["CA", "US"], ask: "0.84535", bid: "0.64589", spread: "15" },
    { pair: "RYL-USD", flags: ["SA", "US"], ask: "0.84346", bid: "0.64514", spread: "13" },
    { pair: "AUD-USD", flags: ["AU", "US"], ask: "0.64191", bid: "0.64171", spread: "12" },
    { pair: "NZD-USD", flags: ["NZ", "US"], ask: "0.64123", bid: "0.64103", spread: "11" },
    { pair: "JPY-USD", flags: ["JP", "US"], ask: "0.84234", bid: "0.84214", spread: "10" },
    { pair: "CHF-USD", flags: ["CH", "US"], ask: "0.74234", bid: "0.74214", spread: "14" }
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
    { symbol: "AAPL", ask: 150.5, bid: 148.5, spread: 2 },
    { symbol: "GOOGL", ask: 2802.5, bid: 2797.5, spread: 5 },
    { symbol: "AMZN", ask: 3501.5, bid: 3498.5, spread: 3 },
    { symbol: "MSFT", ask: 300.5, bid: 299.5, spread: 1 },
    { symbol: "TSLA", ask: 702, bid: 698, spread: 4 },
    { symbol: "NFLX", ask: 603, bid: 597, spread: 6 },
    { symbol: "NVDA", ask: 651, bid: 649, spread: 2 },
    { symbol: "SPY", ask: 451.5, bid: 448.5, spread: 3 }
  ],
  Commodities: [
    { commodity: "Gold", ask: 1802.5, bid: 1797.5, spread: 5 },
    { commodity: "Silver", ask: 25.1, bid: 24.9, spread: 0.2 },
    { commodity: "Copper", ask: 4.05, bid: 3.95, spread: 0.1 },
    { commodity: "Oil", ask: 60.5, bid: 59.5, spread: 1 },
    { commodity: "Natural Gas", ask: 3.025, bid: 2.975, spread: 0.05 },
    { commodity: "Wheat", ask: 8.1, bid: 7.9, spread: 0.2 },
    { commodity: "Corn", ask: 5.05, bid: 4.95, spread: 0.1 },
    { commodity: "Soybeans", ask: 13.15, bid: 12.85, spread: 0.3 }
  ],
  SpotMetals: [
    { metal: "Silver", ask: 25.1, bid: 24.9, spread: 0.2 },
    { metal: "Platinum", ask: 1002.5, bid: 997.5, spread: 5 },
    { metal: "Palladium", ask: 2015, bid: 2000, spread: 15 },
    { metal: "Copper", ask: 4.05, bid: 3.95, spread: 0.1 },
    { metal: "Gold", ask: 1802.5, bid: 1797.5, spread: 5 },
    { metal: "Iron Ore", ask: 122, bid: 120, spread: 2 },
    { metal: "Zinc", ask: 2.05, bid: 1.95, spread: 0.05 },
    { metal: "Nickel", ask: 15.3, bid: 15, spread: 0.3 }
  ],
  Energies: [
    { energy: "Oil", ask: 60.5, bid: 59.5, spread: 1 },
    { energy: "Natural Gas", ask: 3.025, bid: 2.975, spread: 0.05 },
    { energy: "Coal", ask: 52, bid: 50, spread: 2 },
    { energy: "Electricity", ask: 40.5, bid: 39.5, spread: 0.5 },
    { energy: "Wind", ask: 0.035, bid: 0.025, spread: 0.01 },
    { energy: "Solar", ask: 0.025, bid: 0.015, spread: 0.005 },
    { energy: "Hydroelectric", ask: 0.011, bid: 0.009, spread: 0.001 },
    { energy: "Geothermal", ask: 0.07, bid: 0.05, spread: 0.02 }
  ],
  Indices: [
    { index: "S&P 500", ask: 4005, bid: 3995, spread: 10 },
    { index: "Dow Jones", ask: 35025, bid: 35000, spread: 25 },
    { index: "Nasdaq", ask: 13507.5, bid: 13492.5, spread: 15 },
    { index: "FTSE 100", ask: 7010, bid: 6990, spread: 20 },
    { index: "DAX", ask: 15015, bid: 14985, spread: 30 },
    { index: "CAC 40", ask: 6006, bid: 5994, spread: 12 },
    { index: "Hang Seng", ask: 26040, bid: 26000, spread: 40 },
    { index: "Nikkei 225", ask: 28035, bid: 28000, spread: 35 }
  ]
};

const MarketSpreadsAndSwaps = () => {
  const [marketData, setMarketData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState('Forex');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) => {
        const updatedData = { ...prevData };
        Object.keys(updatedData).forEach((market) => {
          updatedData[market] = updatedData[market].map((item) => {
            const newBid = getRandomBid(item.bid);
            const newAsk = getRandomAsk(item.ask);
            return { ...item, bid: newBid, ask: newAsk };
          });
        });
        return updatedData;
      });

      // Update the chart data
      setChartData((prevData) => {
        const currentBid = parseFloat(marketData[selectedCategory]?.[0]?.bid || 0);
        const currentAsk = parseFloat(marketData[selectedCategory]?.[0]?.ask || 0);
        const midline = (currentBid + currentAsk) / 2;  // Midline as the average of bid and ask

        const newData = [...prevData, {
          timestamp: Date.now(),
          bid: currentBid,
          ask: currentAsk,
          midline: midline,
        }];
        
        // Keep only the last 5 seconds of data
        const filteredData = newData.filter(
          (data) => Date.now() - data.timestamp <= 5000
        );

        return filteredData;
      });

    }, 100); // Update every 1 second

    return () => clearInterval(interval);
  }, [marketData, selectedCategory]);

  const getRandomBid = (prevBid) => {
    const changeMagnitude = (Math.random() - 0.5) * 0.01;  // Increased volatility
    let newBid = parseFloat(prevBid) + changeMagnitude;
    
    // Ensure bid doesn't go below zero
    newBid = Math.max(newBid, 0.00001); 
    return newBid.toFixed(5);
  };

  const getRandomAsk = (prevAsk) => {
    const changeMagnitude = (Math.random() - 0.5) * 0.01;  // Increased volatility
    let newAsk = parseFloat(prevAsk) + changeMagnitude;
    
    // Ensure ask doesn't go below zero
    newAsk = Math.max(newAsk, 0.00001); 
    return newAsk.toFixed(5);
  };

  return (
    <div className="market-spreads-and-swaps">
      <div className="header">
        <h1>Market Spreads and Swaps</h1>
        <button className="trade-now-btn">Trade Now</button>
      </div>

      <div className="category-tabs">
        {Object.keys(marketData).map((category) => (
          <div
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Spread</th>
            <th>Chart</th>
          </tr>
        </thead>
        <tbody>
          {marketData[selectedCategory].map((item, index) => (
            <tr key={index}>
              <td>{item.pair || item.symbol || item.commodity || item.metal || item.energy || item.index}</td>
              <td>${parseFloat(item.bid).toFixed(5)}</td>
              <td>${parseFloat(item.ask).toFixed(5)}</td>
              <td>${(parseFloat(item.ask) - parseFloat(item.bid)).toFixed(5)}</td>
              <td>
                <div className="chart-container">
                  <AreaChart
                    width={150}
                    height={70}
                    data={chartData}
                  >
                    <defs>
                      <linearGradient id="colorBid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="green" stopOpacity={0.2} />
                      </linearGradient>
                      <linearGradient id="colorAsk" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="red" stopOpacity={0.2} />
                      </linearGradient>
                      <linearGradient id="colorMidline" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="50%" stopColor="yellow" stopOpacity={0.8} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="bid"
                      stroke="green"
                      fill="url(#colorBid)"
                      fillOpacity={0.5}
                    />
                    {/* <Area
                      type="monotone"
                      dataKey="ask"
                      stroke="red"
                      fill="url(#colorAsk)"
                      fillOpacity={0.5}
                    />
                    <Line
                      type="monotone"
                      dataKey="midline"
                      stroke="yellow"
                      strokeWidth={2}
                      dot={false}
                    /> */}
                    <XAxis dataKey="timestamp" hide />
                    <YAxis hide domain={['auto', 'auto']} />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="none" />
                  </AreaChart>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketSpreadsAndSwaps;