import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';

const LeftStyles = {
  backgroundColor: '#ff9e2c',
  float: 'left',
  width: '50%',
}

class App extends Component {
  render() {
    return (
      <div class="container">
        <h1>Flights App</h1>
        <p>Airport ID: <input type="text"/></p>
        <div style={LeftStyles}>
          <h2>Arrivals</h2>
          <ul>
            <li>Flight 0</li>
            <li>Flight 1</li>
            <li>Flight 2</li>
            <li>Flight 3</li>
          </ul>
        </div>
        <div className="right-half">
        <h2>Departures</h2>
        <ul>
          <li>Flight 0</li>
          <li>Flight 1</li>
          <li>Flight 2</li>
          <li>Flight 3</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
