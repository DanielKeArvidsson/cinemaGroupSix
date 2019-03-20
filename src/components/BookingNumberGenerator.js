import React, { Component } from "react";
import REST from "../REST";

class Ticket extends REST{}

class BookingNumberGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async getBookingNumber() {
    let num = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 6; i++) {
      num += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    let ticketBookingNumber = await Ticket.find(`.find({bookingNum: '${num}'})`);

    if (ticketBookingNumber.length == 0) {
      return num;
    }
    else if (num === ticketBookingNumber[0].bookingNum) {
      this.getBookingNumber();
    }
    else {
      return num;
    }
  }
}

export default BookingNumberGenerator;