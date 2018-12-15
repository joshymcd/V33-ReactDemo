import React, { Component } from 'react';
import './App.css';

const LeftStyles = {
  backgroundColor: '#ff9e2c',
  float: 'left',
  width: '50%',
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      airportName: 'ewqewqewe'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({airportName: event.target.value})
  }


  render() {
    return (
      <div>
        <h1>Flights App</h1>
        <p>Airport ID: <input type="text" value={this.state.airportName} onChange={this.handleChange}/></p>
        <div style={LeftStyles}>
          <h2>Arrivals from {this.state.airportName}</h2>
          <ul>
            <li>Flight 0</li>
            <li>Flight 1</li>
            <li>Flight 2</li>
            <li>Flight 3</li>
          </ul>
        </div>
        <div className="right-half">
        <h2>Departures to {this.state.airportName}</h2>
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
