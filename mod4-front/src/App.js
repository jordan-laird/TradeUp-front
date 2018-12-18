import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AlphaVantage } from './config/api_key'
import { HomePage } from './components/HomePage'

console.log(AlphaVantage)

class App extends Component {
  
  render() {
    return (
      <div className="App">
            <HomePage />
      </div>
    );
  }
}

export default App;
