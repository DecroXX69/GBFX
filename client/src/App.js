// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroContainer from './minicomponent/HeroContainer';
import TradingAccounts from './minicomponent/TradingAccounts';
import Contact from './components/Contact';
import Whoweare from './minicomponent/Whoweare';
import FAQSection from './components/FAQ';
import TradeCard from './minicomponent/TradeCard';
import MarketSpreadsAndSwaps from './minicomponent/MarketSpreadsAndSwaps';
import About from './components/About';
import NewsFeed from './minicomponent/NewsFeed';
import Testimonials from './minicomponent/Testimonials';
import OurTeam from './minicomponent/Ourteam';
import Pricing from './minicomponent/PricingPans';

import GreenBullPage from './components/GreenBullreferal';
import Pamm from './components/Pamm';
import PAMMLanding from './minicomponent/PammLanding';
import PAMMCalculator from './minicomponent/PAMMCalculator';
import Home from './components/Home';
import TelegramButton from './components/Telegram';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trading" element={<Pamm />} />
          <Route path="/market" element={<GreenBullPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<PAMMCalculator />} />
        </Routes>
        <TelegramButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;