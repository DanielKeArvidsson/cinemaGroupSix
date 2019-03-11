import React, { Component } from 'react';
import Seat from "./Seat";
class SeatRow extends Component {
  constructor(props) {
    super(props);
    let numberOfSeats = []
    this.seatnum = props.seatsInSalong;
    this.seatnum -= props.numberOfSeats

    for(let i = 0; i<props.numberOfSeats; i++){
        numberOfSeats.push(this.seatnum++);
    }
    numberOfSeats.reverse()
    this.row = numberOfSeats.map((a, index) =>
        <Seat key={index} seatNum={a} rowNum={props.rowNum}/>    
    )
  }
  
  render() {
    return (
      <div className="row justify-content-center">
        {this.row}
      </div>
    );
  }
}

export default SeatRow;