import React, { Component } from 'react';
import './App.css';
import Social from './Component/Social';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Shop from './Component/Shop';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { BrowserRouter , Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
          <BrowserRouter>
              <Social />
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Shop' component={Shop} />
              <Route path='/Contact' component={Contact} />
              <Footer />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
 