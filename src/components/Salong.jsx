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
    this.rows = 1
    this.seats = 0;
    this.getSalong('Lilla Salongen')
  }

  async getSalong(salongName) {
    this.auditorium = await Auditorium.find('.findOne({name:/' + salongName + '/})');
    if (!this.auditorium) {
      return
    }



    for (let numberOfSeatsInRow of this.auditorium.seatsPerRow) {
      this.seats += numberOfSeatsInRow;

      this.seatRow = new SeatRow;
      // create one row of seats

      for (let seatCounter = 0; seatCounter < numberOfSeatsInRow; seatCounter++) {
        this.seatRow.row.push(<Seat/>);
        this.seats--
      }
      this.seats += numberOfSeatsInRow

      this.rows++
      this.salong.push(<SeatRow/>)
    }
    console.log(this.salong)
    this.setState({ state: this.state });
    return this.salong
  }


  render() {
    return (
      
      <div className="salong">
        {this.salong}
      </div>
    );
  }
}

export default Salong;