import React, { useEffect } from 'react';
import './TradingViewWidgets.css';

const TradingViewWidgets = () => {
  useEffect(() => {
    const loadWidget = (scriptId, scriptConfig, widgetContainerClass) => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptConfig.src;
        script.async = true;
        script.innerHTML = JSON.stringify(scriptConfig.options);

        const widgetContainer = document.querySelector(widgetContainerClass);
        if (widgetContainer) {
          widgetContainer.appendChild(script);
        }
      }
    };

    loadWidget('tradingview-events-widget', {
      src: 'https://s3.tradingview.com/external-embedding/embed-widget-events.js',
      options: {
        colorTheme: 'dark',
        isTransparent: false,
        width: '100%',
        height: '550',
        locale: 'en',
        importanceFilter: '1,1',
        countryFilter: 'ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu',
      },
    }, '.tradingview-events-widget-container__widget');

    loadWidget('tradingview-screener-widget', {
      src: 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
      options: {
        width: '100%',
        height: 550,
        defaultColumn: 'overview',
        defaultScreen: 'general',
        market: 'forex',
        showToolbar: true,
        colorTheme: 'dark',
        locale: 'en',
      },
    }, '.tradingview-screener-widget-container__widget');
  }, []);

  return (
    <div className="tradingview-container">
      <div className="tradingview-heading">
        <h1>Explore the Markets with Confidence</h1>
        <p>Your ultimate guide to market events and screeners.</p>
      </div>

      <div className="tradingview-widgets">
        <div className="tradingview-widget events-widget">
          <div className="tradingview-events-widget-container__widget"></div>
        </div>
        <div className="tradingview-widget screener-widget">
          <div className="tradingview-screener-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidgets;
