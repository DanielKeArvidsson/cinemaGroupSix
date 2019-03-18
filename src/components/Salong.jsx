import React from "react";
import REST from "../REST";
import SeatRow from "./SeatRow";
import Socket from './Socket'
class Auditorium extends REST {}
class Program extends REST {}
class Ticket extends REST {}

class Salong extends React.Component {
  constructor(props) {
    super(props);
    this.salong = [];
    this.auditoriumSeats = 1;
    this.allSeats = new Array
    this.getSalong();
    this.getBookedSeats();
    // this.listenToSocketIo();
  }
  
  async getSalong() {
    let pathArray = window.location.pathname.split("/");
    this.programPath = pathArray[2];
    this.program = await Program.find(
      `.findOne({_id:'${this.programPath}'}).populate().exec()`
    );
    this.auditorium = await Auditorium.find(
      ".findOne({name:/" + this.program.auditorium.name + "/})"
    );
    if (!this.auditorium) {
      return;
    }

    this.salong = this.auditorium.seatsPerRow.map((numberOfSeats, index) => (
      <SeatRow
        key={index}
        numberOfSeats={numberOfSeats}
        seatsInSalong={(this.auditoriumSeats += numberOfSeats)}
        rowNum={index + 1}
        totalTickets={this.props.totalTickets}
        allSeats={this.allSeats}
      />
    ));

    this.setState({ state: this.state });
  }
  
  async getBookedSeats(){
    this.getTickets = await Ticket.find(`.find({programId: '${this.programPath}'})`)

    this.inDatabas = []

    for(let ticket of this.getTickets){
      for(let seat of ticket.seats){
        this.inDatabas.push(seat)
      }
    }
    console.log(this.inDatabas)
    for(let ja of this.allSeats){
      console.log(ja)
    }
  }
  
  async book(){
    await setTimeout(function(){}, 1000);
    this.bookedSeats = []
    for(let row of this.allSeats){
      for(let seat of row){
        if(seat.state.class == 'choosenSeat'){
          this.bookedSeats.push(seat.seatNum)
        }
      }
    }

    

    this.ticket = new Ticket({
      "bookingNum": this.bookingNum,
      "purchasedAt": new Date(),
      "price": this.total,
      "program": this.program,
      "programId": this.programPath,
      "seats": this.bookedSeats.reverse()
    })
    this.listenToSocketIo();
    await this.ticket.save()

    
    this.props.bookedSeats.push(this.bookedSeats)
  }
  
  listenToSocketIo() {
    Socket.on('newBookedSeats' + this.props.program._id, this.bookedSeats)
  };

  unListenToSocketIo() {
    Socket.off('newBookedSeats' + this.props.program._id, this.bookedSeats)
  };


  
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
    return(
      <div>
        <div className="salong">{this.salong}</div>
        <div className="row">
          <button
            type="button"
            className=" col-md-2 btn btn-secondary booked-tickets p-2 m-4 mt-5 mb-4"
            onClick={this.book.bind(this)}
          >
            Boka biljetter
          </button>
        </div>
      </div>
    );
  }
}

export default Salong;
