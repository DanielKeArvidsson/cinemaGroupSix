import React, { Component } from 'react';
class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {class: 'seat'}
    this.seatNum = props.seatNum;
    this.rowNum = props.rowNum;
    this.props.allSeatsInRow.push(this)
  }

  hover(){
    if(this.state.class === 'seat'){
      this.props.hoverSeats.push(this.props.indexNum)
    }
  }

  render() {
    return (
      <div className={this.state.class} seatnumber={this.seatNum} rownumber={this.rowNum}
       onMouseEnter={this.hover.bind(this)}
      ></div>
    );
  }
}

export default Seat;