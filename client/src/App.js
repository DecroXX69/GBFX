
import './App.css';
import Footer from './components/Footer'; 
import HowItWorks from './minicomponent/Howitworks';
import Marketspreads from './minicomponent/Marketspreads';
import Navbar from './components/Navbar';
import HeroContainer from './minicomponent/HeroContainer';
import TradingAccounts from './minicomponent/TradingAccounts';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <TradingAccounts />
      <HowItWorks />
      <Marketspreads />
      <Contact />
     <Footer />
    </div>
  );
}

export default App;
