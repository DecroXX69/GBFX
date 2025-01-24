import React, { useEffect } from 'react';

const ForexTaperWidget = () => {
  useEffect(() => {
    // Check if the script already exists to prevent duplication
    const scriptId = 'tradingview-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: 'USD GOLD', proName: 'OANDA:XAUUSD' },
          { description: 'EUR USD', proName: 'OANDA:EURUSD' },
          { description: 'AUS USD', proName: 'FX:AUDUSD' },
          { description: 'GBP USD', proName: 'FX:GBPUSD' },
          { description: 'INR USD', proName: 'FX_IDC:INRUSD' },
          { description: 'USD JPY', proName: 'FX:USDJPY' },
          { description: 'USD CAD', proName: 'FX:USDCAD' },
          { description: 'USD CHF', proName: 'FX:USDCHF' },
          { description: 'USD CNH', proName: 'FX:USDCNH' },
          { description: 'USD HKD', proName: 'FX:USDHKD' },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
        colorTheme: 'dark',
        locale: 'en',
      });
      document.querySelector('.tradingview-widget-container').appendChild(script);
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="tradingview-widget-container" style={{ position: 'relative', bottom: '23px' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        {/* <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
      </div>
    </div>
  );
};

export default ForexTaperWidget;
