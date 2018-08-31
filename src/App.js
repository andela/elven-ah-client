import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <strong className="intro">You have your scss file configured</strong>
        </p>
        <p className="start">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" class="btn btn-secondary">Secondary</button>
      </div>
    );
  }
}

export default App;
