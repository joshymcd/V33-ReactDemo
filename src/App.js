import React, { Component } from 'react';
import './App.css';
import FlightList from  './FlightList.js';

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
          <FlightList type="arrival" />
        </div>
        <div className="right-half">
          <FlightList type="departure" />
        </div>
      </div>
    );
  }
}

export default App;
