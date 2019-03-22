import React, { Component } from "react";
import TicketInfo from "./TicketInfo";
import REST from "../REST";
import App from "../App";
import LoginPage from "./LoginPage";
class Ticket extends REST {}
class Program extends REST {}
class User extends REST {}
class Login extends REST {
  async delete() {
    this._id = 1;
    // we set an id here, because the REST class
    // will complain if we try to call delete on an object without _id
    // - and we use delete to logout (see test.js)

    return super.delete();
  }

  static get baseRoute() {
    return "login/";
  }
}
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
    let login = await Login.find()
    let anvandare = await User.find(
      `.findOne({email:'${login.email}'}).populate().exec()`
    );
    let foundTickets = await Ticket.find(
      `.find({user:'${anvandare._id}'}).populate().exec()`
    );

    for (let ticket of foundTickets) {
      let findingProgram = await Program.find(
        `.findOne({_id:'${ticket.program.id}'})`
      );
      let mergingProgWithTicket = Object.assign(findingProgram, ticket);
      this.foundPrograms.push(mergingProgWithTicket);
    }
    for (let oldOrNew of this.foundPrograms) {
      if (oldOrNew.date <= this.currentDate) {
        if (
          oldOrNew.time < this.time.substring(0, 5) &&
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
    this.state.user = anvandare
    this.state.data = data
    this.state.foundTickets = foundTickets
    this.setState(state => this.state);
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
