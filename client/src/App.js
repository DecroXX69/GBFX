
import './App.css';
import HowItWorks from './mini-components/Howitworks';
import Marketspreads from './mini-components/Marketspreads';
import Navbar from './components/Navbar';
import HeroContainer from './minicomponent/HeroContainer';
import TradingAccounts from './minicomponent/TradingAccounts';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <TradingAccounts />
    </div>
  );
}

export default App;
