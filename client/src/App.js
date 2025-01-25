import './App.css';
import Footer from './components/Footer'; 
import HowItWorks from './minicomponent/Howitworks';
import Marketspreads from './minicomponent/Marketspreads';
import Navbar from './components/Navbar';
import HeroContainer from './minicomponent/HeroContainer';
import TradingAccounts from './minicomponent/TradingAccounts';
import Contact from './components/Contact';
import Whoweare from './minicomponent/Whoweare';
import FAQSection from './components/FAQ';
import TradeCard from './minicomponent/TradeCard';
import MarketSpreadsAndSwaps from './minicomponent/MarketSpreadsAndSwaps';
 // Ensure correct import
import About from './components/About';
import NewsFeed from './minicomponent/NewsFeed';
import Testimonials from './minicomponent/Testimonials';
import OurTeam from './minicomponent/Ourteam';
import Pricing from './minicomponent/PricingPans';
import ForexTaperWidget from './minicomponent/tradingview';

import Signup from './components/Signup';
import TradingViewEventsWidget from './minicomponent/ImportantNews';
// import Signup from './components/Signup';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <TradingViewEventsWidget />

      <TradingAccounts />
      <HowItWorks />
      <Marketspreads />
      <Contact /> 
      <Signup />
      <Whoweare />
      
      <FAQSection />
      <TradeCard />
      <MarketSpreadsAndSwaps />
      
      <About />
      <ForexTaperWidget />
      <NewsFeed />
     <Testimonials />
     <OurTeam />
     <Footer />

<Pricing/>
    </div>
  );  
}

export default App;
