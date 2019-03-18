import React, { Component } from 'react';
import Seat from "./Seat";
class SeatRow extends Component {
  constructor(props) {
    super(props);
    let numberOfSeats = []
    this.state = {hover: Number, class: 'hoverChoosenSeat'}
    this.seatnum = props.seatsInSalong;
    this.seatnum -= props.numberOfSeats
    this.allSeatsInRow = new Array;
    this.props.allSeats.push(this.allSeatsInRow)

    for(let i = 0; i<props.numberOfSeats; i++){
        numberOfSeats.push(this.seatnum++);
    }
    numberOfSeats.reverse()
    this.row = numberOfSeats.map((a, index) =>
        <Seat key={index} indexNum={index} seatNum={a} rowNum={props.rowNum} allSeatsInRow={this.allSeatsInRow} hoverSeats={this.state} classname={this.state.class}/>    
    )
  }

  hover(){
      if(this.allSeatsInRow[this.state.hover] != undefined){
        this.setState({class: 'hoverChoosenSeat'})

    }
      for(let i = 0; i<this.props.totalTickets; i++){
        let seatindex = this.state.hover
        let seat = this.allSeatsInRow[seatindex];
        seatindex--
      }
  }

  select(){
  }
  
  render() {
    return (
      <div className="row justify-content-center" onClick={this.select.bind(this)} onMouseOver={this.hover.bind(this)}>
        {this.row}
        <p>{this.state.hover}</p>
      </div>
    );
  }
}

export default SeatRow;