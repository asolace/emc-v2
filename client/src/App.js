import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import "animate.css/animate.min.css";

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Fellowship from './components/Fellowship'

import Warping from './components/Warping'

const Members = () =>
<div className="about-page">
  <Warping />
</div>

const Prayers = () =>
<div className="about-page">
  <Warping />
</div>

const Photos = () =>
<div className="about-page">
  <Warping />
</div>

const LocaTime = () =>
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
            <Route path="/photos" component={ Photos } />
            <Route path="/location-time" component={ LocaTime } />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
