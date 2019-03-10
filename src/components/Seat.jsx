import React, { Component } from 'react';
class Seat extends Component {
  constructor(seatNum, rowNum, props) {
    super(props);
    this.seatNumber = seatNum;
    this.rowNumber = rowNum;
    this.state = {}
  }

  render() {
    return (
      <div className="seat"></div>
    );
  }
}

export default Seat;