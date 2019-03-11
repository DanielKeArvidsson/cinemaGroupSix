import React from 'react';
import REST from "../REST";
import SeatRow from "./SeatRow";
import Seat from "./Seat";
class Auditorium extends REST{}

class Salong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.salong = [];
    this.auditoriumSeats = 1;
    this.getSalong('Lilla Salongen')
  }

  async getSalong(salongName) {
    this.auditorium = await Auditorium.find('.findOne({name:/' + salongName + '/})');
    if (!this.auditorium) {
      return
    }

    this.salong = this.auditorium.seatsPerRow.map((numberOfSeats, index) => 
        <SeatRow key={index} numberOfSeats={numberOfSeats} seatsInSalong={this.auditoriumSeats += numberOfSeats} rowNum={index+1} />
      )

      this.setState({state: this.state})
    
    }


/*
    for (let numberOfSeatsInRow of this.auditorium.seatsPerRow) {
      this.seats += numberOfSeatsInRow;

      this.seatRow = new SeatRow;
      this.seatRow.getSeatInRow(numberOfSeatsInRow);
      // create one row of seats

      for (let seatCounter = 0; seatCounter < numberOfSeatsInRow; seatCounter++) {
        this.seats--
      }
      this.seats += numberOfSeatsInRow

      this.rows++
      this.salong = this.salong.map( a => 
      <SeatRow/>)
    this.setState({ state: this.state });
    return this.salong
    }*/



  render() {
    return (
      
      <div className="salong mt-5">
        {this.salong}
      </div>
    );
  }
}

export default Salong;