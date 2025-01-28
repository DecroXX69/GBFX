import React, { useEffect } from 'react';
import styles from './ForexTaperWidget.module.css';

const ForexTaperWidget = () => {
  useEffect(() => {
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
          { description: 'S&P 500', proName: 'FOREXCOM:SPXUSD'},
          { description: 'EUR USD', proName: 'OANDA:EURUSD' },
          { description: 'AUS USD', proName: 'FX:AUDUSD' },
          { description: 'ETH', proName: 'BINANCE:ETHUSDT' },
          { description: 'DXY', proName: 'DXY' },
          { description: 'GBP USD', proName: 'FX:GBPUSD' },
          { description: 'USD INR', proName: 'FX_IDC:USDINR' },
          { description: 'USD JPY', proName: 'FX:USDJPY' },
          { description: 'USD CAD', proName: 'FX:USDCAD' },
          { description: 'NASDAQ 100', proName: 'NASDAQ:NDAQ' },
          { description: 'USD CHF', proName: 'FX:USDCHF' },
          { description: 'USD CNH', proName: 'FX:USDCNH' },
          { description: 'USD HKD', proName: 'FX:USDHKD' },
          { description: 'BTC USDT', proName: 'BINANCE:BTCUSDT' },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
        colorTheme: 'dark',
        locale: 'en',
      });
      document.querySelector('.tradingview-widget-container').appendChild(script);
    }
  }, []);

  return (
    <div className={styles.forexWidgetContainer}>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default ForexTaperWidget;
