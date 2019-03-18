import React, { Component } from "react";
import REST from "../REST";
class Ticket extends REST {}
class Program extends REST {}

export class Topplista extends Component {
  constructor(props) {
    super(props);
    this.findMovies();
    this.state = {
      data: []
    };
    this.allBookings = [];
  }

  async findMovies() {
    let data = await Ticket.find();
    console.log(data);
    for (let ticket of data) {
      console.log(ticket.program.movie.title);
      this.allBookings.push(ticket.program.movie.title);
    }
    console.log(this.allBookings);
  }

  render() {
    return <div className="mt-5">topplista</div>;
  }
}

export default Topplista;
