import React, { Component } from 'react';
class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {class: 'seat'}
    this.seatNum = props.seatNum;
    this.rowNum = props.rowNum;
    this.choosenSeat = 0;
    this.props.allSeatsInRow.push(this)
  }

  hover(){
    if(this.state.class == 'seat'){
      this.props.hoverSeats.hover = this.props.indexNum
      this.setState({class: this.props.classname})
    }
  }
  click(){
    this.setState({class: 'choosenSeat'})
  }
  noSelect(){
    if (this.state.class == 'hoverChoosenSeat'){
      this.setState({class: 'seat'})
    }
  }

  render() {
    return (
      <div className={this.state.class} seatnumber={this.seatNum} rownumber={this.rowNum}
       onClick={this.click.bind(this)} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.noSelect.bind(this)}
      ></div>
    );
  }
}

export default Seat;