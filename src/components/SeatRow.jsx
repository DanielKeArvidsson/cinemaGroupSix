import React, { Component } from 'react';
import Seat from "./Seat";
class SeatRow extends Component {
  constructor(props) {
    super(props);
    let numberOfSeats = []
    this.state = { hover: Number, class: 'hoverChoosenSeat', totalTickets: 2 }
    this.seatnum = props.seatsInSalong;
    this.seatnum -= props.numberOfSeats
    this.allSeatsInRow = [];
    this.seatIndex = [];
    this.props.allSeats.push(this.allSeatsInRow)
    this.props.row.push(this)

    for (let i = 0; i < props.numberOfSeats; i++) {
      numberOfSeats.push(this.seatnum++);
    }

    numberOfSeats.reverse()
    this.row = numberOfSeats.map((a, index) =>
      <Seat key={index} indexNum={index} seatNum={a} rowNum={props.rowNum} allSeatsInRow={this.allSeatsInRow} hoverSeats={this.seatIndex} classname={this.state.class} />
    )
  }

  hover() {
    if (this.seatIndex.length > 0) {
      this.index = this.seatIndex[0]
      for (let i = 0; this.state.totalTickets > i; i++) {
        if (this.allSeatsInRow[this.index].state.class === 'seat') {
          this.allSeatsInRow[this.index].setState({ class: 'hoverChoosenSeat' })
          if (this.index < this.allSeatsInRow.length - 1) {
            this.index++
          }
        }
      }
    } else if (this.seatIndex == 0) {
      this.index = this.seatIndex[0]
      for (let seat of this.allSeatsInRow) {
        if (seat.state.class === 'hoverChoosenSeat') {
          seat.setState({ class: 'seat' })
          this.index++
        }
      }
    }
    this.seatIndex.pop()
  }

  leave() {
    for (let seat of this.allSeatsInRow) {
      if (seat.state.class === 'hoverChoosenSeat') {
        seat.setState({ class: 'seat' })
      }
    }
  }

  render() {
    return (
      <div className="row justify-content-center" onMouseOver={this.hover.bind(this)} onMouseLeave={this.leave.bind(this)}>
        {this.row}
      </div>
    );
  }
}

export default SeatRow;