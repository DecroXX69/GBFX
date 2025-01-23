
import './App.css';
import Footer from './components/Footer'; 
import HowItWorks from './minicomponent/Howitworks';
import OurServices from './minicomponent/OurServices';
import Marketspreads from './minicomponent/Marketspreads';
import Navbar from './components/Navbar';
import HeroContainer from './minicomponent/HeroContainer';
import TradingAccounts from './minicomponent/TradingAccounts';
import Contact from './components/Contact';
import Whoweare from './minicomponent/Whoweare';
import FAQSection from './components/FAQ';
import TradeCard from './minicomponent/TradeCard';



import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <TradingAccounts />
      <HowItWorks />
      <Marketspreads />
      <Contact /> 
      <Signup />
      <Whoweare />
     <Footer />
    <FAQSection />
    <TradeCard />




    </div>
  );
}

export default App;
