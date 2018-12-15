import React, { Component } from 'react';

class FlightList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


  componentDidMount(){
    console.log("Comp Mount!");
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    var URL = 'https://opensky-network.org/api/flights/' + this.props.type + '?airport='+this.props.airportName+'&begin=1544745600&end=1544832000';
    if (this.props !== prevProps) {
      console.log('URL');
      console.log(URL);

      //Sync Web call :(
      var Httpreq = new XMLHttpRequest();
      Httpreq.open("GET",URL,false);
      Httpreq.send(null);
      var json_obj = JSON.parse(Httpreq.responseText);

      this.setState({data: json_obj})
      console.log(this.state);
    }
  }


  render(){

    return (
      <div>
        <h2>{this.props.airportName} - {this.props.type}s</h2>
        <ul>
        {this.state.data.map((flight) =>
          <li key={flight.icao24}>{flight.callsign}</li>
        )}
        </ul>
      </div>
    );

  }

}

export default FlightList;
