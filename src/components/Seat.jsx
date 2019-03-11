import React, { Component } from 'react';
class Seat extends Component {
  constructor(props) {
    super(props);
    this.seatNum = props.seatNum;
    this.rowNum = props.rowNum;
  }

  render() {
    return (
      <div className="seat" seatnumber={this.seatNum} rownumber={this.rowNum}></div>
    );
  }
}

export default Seat;