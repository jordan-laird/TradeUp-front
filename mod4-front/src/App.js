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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HomePage />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
