import React from "react";
import REST from "../REST";
import Salong from "./Salong";
import LightImage from "../images/light.png";
class Program extends REST {}

class BookTicktPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { adult: 2, kid: 0, senior: 0, total: 170 };
    this.adult = 2;
    this.kid = 0;
    this.senior = 0;
    this.total = 170;
    this.totalTickets = 2;
    this.program = '';
    this.loadProgramData();
  }

  async loadProgramData() {
    this.id = this.props.match.params.id;
    this.program = await Program.find(this.id)
    console.log(this.program)
    await this.setState({title: this.program.movie.title, salongName: this.program.auditorium.name})
    console.log(this.state)
  }
  
  decrementKid() {
    if (this.kid) {
      this.kid--;
      this.total -= 50;
      this.getBookedSeats();
      this.totalTickets--;
      this.toMannyTickets = "";
    }
  }
  incrementKid() {
    if (this.totalTickets < 7) {
      this.kid++;
      this.total += 50;
      this.getBookedSeats();
      this.totalTickets++;
    } else {
      this.toMannyTickets = `<div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>`;
      this.getBookedSeats();
    }
  }
  decrementAdult() {
    if (this.adult) {
      this.adult--;
      this.total -= 85;
      //this.getBookedSeats()
      this.totalTickets--;
      this.toMannyTickets = "";
    }
  }
  incrementAdult() {
    if (this.totalTickets < 7) {
      this.adult++;
      this.total += 85;
      this.getBookedSeats();
      this.totalTickets++;
      this.render();
    } else {
      this.toMannyTickets = `<div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>`;
      this.getBookedSeats();
      this.render();
    }
  }
  decrementSenior() {
    if (this.senior) {
      this.senior--;
      this.total -= 65;
      this.getBookedSeats();
      this.totalTickets--;
      this.toMannyTickets = "";
      this.render();
    }
  }
  incrementSenior() {
    if (this.totalTickets < 7) {
      this.senior++;
      this.total += 65;
      this.getBookedSeats();
      this.totalTickets++;
      this.render();
    } else {
      this.toMannyTickets = `<div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>`;
      this.getBookedSeats();
      this.render();
    }
  }

  render() {
    return (
      <section className="book-ticket">
        <div className="">
          <div className="theShow">
            <h2>{this.state.title}</h2>
            <h3>📆 {this.program.date}</h3>
            <h3>🕑 {this.program.time}</h3>
          </div>
          <div className="ticket-selector">
            <div className="row mt-4 mb-4">
              <div className="price col-12 col-md-4 mt-4">
                <p>Ordinarie (85 kr/st)</p>
                <div className="ticket-incrementor adult">
                  <button
                    className="decrement-adult btn btn-secondary mr-2"
                    onClick={this.decrementAdult}
                  >
                    -
                  </button>
                  {this.adult}
                  <button className="increment-adult btn btn-secondary ml-2">
                    +
                  </button>
                </div>
              </div>

              <div className="price col-12 col-md-4 mt-4">
                <p>Pensionär (65 kr/st)</p>
                <div className="ticket-incrementor senior">
                  <button className="decrement-senior btn btn-secondary mr-2">
                    -
                  </button>
                  {this.senior}
                  <button className="increment-senior btn btn-secondary ml-2">
                    +
                  </button>
                </div>
              </div>

              <div className="price col-12 col-md-4 mt-4">
                <p>Barn (50 kr/st)</p>
                <div className="ticket-incrementor kids">
                  <button className="decrement-kid btn btn-secondary mr-2">
                    -
                  </button>
                  {this.kid}
                  <button className="increment-kid btn btn-secondary ml-2">
                    +
                  </button>
                </div>
              </div>
            </div>

            <h4>Totalpris: {this.total}</h4>
          </div>
          <div className="row justify-content-center">
            <div className="screen">
              <img className="light" src={LightImage}/>
            </div>
          </div>

          <Salong auditorium={this.state.salongName}/>

          <div className="row">
            <button
              type="button"
              className=" col-md-2 btn btn-secondary booked-tickets p-2 m-4 mt-5 mb-4"
            >
              Boka biljetter
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default BookTicktPage;
