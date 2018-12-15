import React, { Component } from 'react';

class FlightList extends Component {


  render(){

    return (
      <div>
        <h2>{this.props.airportName} - {this.props.type}s</h2>
        <ul>
          <li>Flight 0</li>
          <li>Flight 1</li>
          <li>Flight 2</li>
          <li>Flight 3</li>
        </ul>
      </div>
    );

  }

}

export default FlightList;
