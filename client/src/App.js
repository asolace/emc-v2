import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import "animate.css/animate.min.css";

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Fellowship from './components/Fellowship'
import Footer from './components/Footer'

import Warping from './components/Warping'

const Members = () =>
<div className="about-page">
  <Warping />
</div>

const Prayers = () =>
<div className="about-page">
  <Warping />
</div>

const Gallery = () =>
<div className="about-page">
  <Warping />
</div>

const Events = () =>
<div className="about-page">
  <Warping />
</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-container">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/members" component={ Members } />
            <Route path="/fellowship" component={ Fellowship } />
            <Route path="/prayers" component={ Prayers } />
            <Route path="/gallery" component={ Gallery } />
            <Route path="/events" component={ Events } />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
