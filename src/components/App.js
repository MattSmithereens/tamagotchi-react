import React, { Component } from 'react';
import Stats from './Stats';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Thadagotchi</h1>
        <Stats />
      </div>
    );
  }
}

export default App;
