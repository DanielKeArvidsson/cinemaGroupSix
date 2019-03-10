import React, { Component } from 'react';
class SeatRow extends Component {
  constructor() {
    super();
    this.state = {}
    this.row = [];
    console.log(this.row)
  }
  render() {
    return (
      <div className="row justify-content-center">
      row
        {this.row}
      </div>
    );
  }
}

export default SeatRow;