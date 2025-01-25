import React from 'react';
import Navbar from './Navbar';
import HeroContainer from '../minicomponent/HeroContainer';
import TradingAccounts from '../minicomponent/TradingAccounts';
import Whoweare from '../minicomponent/Whoweare';
import TradeCard from '../minicomponent/TradeCard';
import Marketspreads from '../minicomponent/Marketspreads';
import Howitworks from '../minicomponent/Howitworks';
import NewsFeed from '../minicomponent/NewsFeed';
import Footer from './Footer';
import ImportantNew from '../minicomponent/ImportantNews';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroContainer />
        <TradingAccounts />
        <Whoweare />
        <TradeCard />
        <ImportantNew/>
        <Howitworks />
        <NewsFeed />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;