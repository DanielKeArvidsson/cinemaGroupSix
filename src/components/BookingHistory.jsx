import React, { Component } from "react";
import TicketInfo from "./TicketInfo";
import REST from "../REST";
import App from "../App";
class Ticket extends REST {}
class Program extends REST {}
class User extends REST {}
class BookingHistory extends Component {
  constructor(props) {
    super(props);
    this.generateBookingHistory = this.generateBookingHistory.bind(this);
    this.generateBookingHistory();
    this.state = {
      user: "",
      data: [],
      foundTickets: [],
      oldBookings: [],
      futureBookings: [],
      testArray: []
    };
    this.foundPrograms = [];
    this.currentDate = new Date().toISOString().slice(0, 10);
    this.time = new Date().toISOString().substr(16, 8);
  }
  async generateBookingHistory() {
    let data = await Ticket.find(`.find().populate('program').exec()`);
    let anvandare = await User.find(
      `.findOne({email:'${App.email}'}).populate().exec()`
    );
    this.setState({
      user: anvandare,
      data: data
    });
    let foundTickets = await Ticket.find(
      `.find({user:'${this.state.user._id}'}).populate().exec()`
    );
    this.setState({
      foundTickets: foundTickets
    });
    for (let ticket of this.state.foundTickets) {
      let findingProgram = await Program.find(
        `.findOne({_id:'${ticket.program.id}'})`
      );
      let mergingProgWithTicket = Object.assign(findingProgram, ticket);
      this.foundPrograms.push(mergingProgWithTicket);
    }
    for (let oldOrNew of this.foundPrograms) {
      if (oldOrNew.date <= this.currentDate) {
        if (
          oldOrNew.time > this.time.substring(0, 5) &&
          this.currentDate <= oldOrNew.date
        ) {
          this.state.futureBookings.push(
            <TicketInfo key={oldOrNew._id} {...oldOrNew} />
          );
        } else {
          this.state.oldBookings.push(
            <TicketInfo key={oldOrNew._id} {...oldOrNew} />
          );
        }
      } else {
        this.state.futureBookings.push(
          <TicketInfo key={oldOrNew._id} {...oldOrNew} />
        );
      }
    }
    this.setState({ state: this.state });
  }

  render() {
    return (
      <div className="bookingHistory">
        <h1
          className={
            "mt-5 " + (this.state.futureBookings.length > 0 ? "" : "d-none")
          }
        >
          Kommande bokningar
        </h1>
        <div className="row">
        {this.state.futureBookings.map(i => {
          return i;
        })}
        </div>
        <h1
          className={
            "mt-5 " + (this.state.oldBookings.length > 0 ? "" : "d-none")
          }
        >
          Tidigare bokningar
        </h1>
        <div className="row">
        {this.state.oldBookings.map(i => {
          return i;
        })}
        </div>
        <h1
          className={"mt-5 " + (this.state.foundTickets.length ? "d-none" : "")}
        >
          {" "}
          Inga bokade biljetter
        </h1>
      </div>
    );
  }
}

export default BookingHistory;
