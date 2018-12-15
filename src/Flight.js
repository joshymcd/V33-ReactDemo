import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);

  }


  render(){
    var depDate = new Date(0);
    depDate.setUTCSeconds(this.props.flight.firstSeen);
    var ArrDate = new Date(0);
    ArrDate.setUTCSeconds(this.props.flight.lastSeen);

    return (
          <li>
            <div>
              icao24: {this.props.flight.icao24} <br />
              Depart Time: {depDate.toString()}  <br />
              Depart Airport: {this.props.flight.estDepartureAirport} <br />
              Arrival Time: {ArrDate.toString()} <br />
              Arrival Airport: {this.props.flight.estArrivalAirport} <br />
              CallSign: {this.props.flight.callsign} <br />
            </div>
          </li>

    );

  }

}

export default Flight;
