import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import ParallaxContainer from './components/Parallax';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
            <ParallaxContainer/>
        </div>
      </Router>
    );
  }
}

export default App;
