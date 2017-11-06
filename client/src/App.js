import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import "animate.css/animate.min.css";

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Fellowship from './components/Fellowship'
import Login from './components/Login'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

import Warping from './components/Warping'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-container">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/fellowship" component={ Fellowship } />
            <Route path="/login" component={ Login } />
            <Route path="/gallery" component={ Gallery } />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
