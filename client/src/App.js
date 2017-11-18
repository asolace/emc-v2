import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import "animate.css/animate.min.css";

import About from './components/About'
import Directory from './components/Members/Directory'
import Fellowship from './components/Fellowship'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Members from './components/Members'
import SignUp from './components/SignUp'

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
            <Route path="/members" component={ Members } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/directory" component={ Directory } />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
