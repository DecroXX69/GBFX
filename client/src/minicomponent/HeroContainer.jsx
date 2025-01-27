import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TradingPage.css';
import ForexTaperWidget from './tradingview.jsx';

const TradingPage = () => {
  const [forexData, setForexData] = useState([
    { pair: "US30", price: "391300.90", change: "-0.43" },
    { pair: "US30", price: "394833.90", change: "+0.93" },
    { pair: "US30", price: "391323.90", change: "-0.12" },
    { pair: "US30", price: "391467.90", change: "-0.35" },
    { pair: "US30", price: "354033.90", change: "+0.55" }
  ]);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Trading for Anyone.\nAnywhere. Anytime.",
      subtitle: "Trade over 1000 Instruments. Forex, CFDs on Stock Indices,\nCommodities, Stocks, Metals and Energies.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80" // Placeholder image
    },
    {
      title: "Advanced Trading Tools.\nProfessional Results.",
      subtitle: "Access real-time market data, advanced charts,\nand powerful trading indicators.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
    },
    {
      title: "Secure Trading.\nReliable Platform.",
      subtitle: "Experience safe and secure trading with\n24/7 customer support and protection.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const forexInterval = setInterval(() => {
      setForexData(prevData => 
        prevData.map(item => ({
          ...item,
          change: (Math.random() * 2 - 1).toFixed(2),
          price: (parseFloat(item.price) + Math.random() * 100 - 50).toFixed(2)
        }))
      );
    }, 5000);

    return () => clearInterval(forexInterval);
  }, []);

  return (
    <div className="trading-page">
      {/* <div className="ticker-container">
        <div className="ticker-wrapper">
          {forexData.map((item, index) => (
            <div key={index} className="ticker-item">
              <span className="currency-pair">{item.pair}</span>
              <span className="price">{item.price}</span>
              <span className={`change ${parseFloat(item.change) >= 0 ? 'positive' : 'negative'}`}>
                ({item.change}
                <i className={`bi ${parseFloat(item.change) >= 0 ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>)
              </span>
            </div>
          ))}
        </div>
      </div> */}
  <div className='slide'>
  <div className="forex-widget-section">
        <ForexTaperWidget />
      </div>
      <div className="hero-section2">
      
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="slide-background" 
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="container-fluid h-100 position-relative">
              <div className="row h-100 align-items-center">
                <div className="col-lg-6 hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <button className="create-account-btn">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};


export default TradingPage;

