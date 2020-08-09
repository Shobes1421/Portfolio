import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Header from './Components/header/Header';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
        <Header />
        </div>

        
          <Route exact path= '/about' component={About} />
          <Route exact path= '/portfolio' component={Portfolio} />
          <Route exact path= '/contact' component={Contact} />
        
          <Footer />
      </div>
    </Router>
  );
}

export default App;
