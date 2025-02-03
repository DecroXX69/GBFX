// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Contact from './components/Contact';


import GreenBullPage from './components/GreenBullreferal';
import Pamm from './components/Pamm';

import PAMMCalculator from './minicomponent/PAMMCalculator';
import Homie from './components/Home';
import TelegramButton from './components/Telegram';
import Terms from './components/Terms';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
       
          <Route path="/trading" element={<Pamm />} />
          <Route path="/market" element={<GreenBullPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<PAMMCalculator />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Homie />
        <TelegramButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;