import React from "react";
import REST from "../REST";
import SeatRow from "./SeatRow";
class Auditorium extends REST {}
class Program extends REST {}
class Salong extends React.Component {
  constructor(props) {
    super(props);
    this.salong = [];
    this.auditoriumSeats = 1;
    console.log(this);
    this.getSalong();
  }

  async getSalong() {
    let pathArray = window.location.pathname.split("/");
    let programPath = pathArray[2];
    this.program = await Program.find(
      `.findOne({_id:'${programPath}'}).populate().exec()`
    );
    console.log(this.program.auditorium.name);
    this.auditorium = await Auditorium.find(
      ".findOne({name:/" + this.program.auditorium.name + "/})"
    );
    console.log(this.props.auditorium);
    if (!this.auditorium) {
      return;
    }

    this.salong = this.auditorium.seatsPerRow.map((numberOfSeats, index) => (
      <SeatRow
        key={index}
        numberOfSeats={numberOfSeats}
        seatsInSalong={(this.auditoriumSeats += numberOfSeats)}
        rowNum={index + 1}
      />
    ));

    this.setState({ state: this.state });
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
    return <div className="salong">{this.salong}</div>;
  }
}

export default Salong;
