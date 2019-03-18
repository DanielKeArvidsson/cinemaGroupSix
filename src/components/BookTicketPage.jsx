import React from "react";
import REST from "../REST";
import Salong from "./Salong";
import LightImage from "../images/light.png";
class Program extends REST {}

class BookTicktPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { adult: 2, kid: 0, senior: 0, total: 170, totalTickets: 2 };
    this.adult = 2;
    this.kid = 0;
    this.senior = 0;
    this.total = 170;
    this.totalTickets = 2;
    this.program = '';
    this.bookedSeats = []
    this.loadProgramData();
  }

  async loadProgramData() {
    this.id = this.props.match.params.id;
    this.program = await Program.find(this.id)
    await this.setState({title: this.program.movie.title, salongName: this.program.auditorium.name})
  }
  
  decrementKid() {
    if (this.kid) {
      this.kid--;
      this.total -= 50;
      this.totalTickets--
      this.setState({kid: this.kid, totalTickets: this.totalTickets})
      // this.getBookedSeats();
      this.toMannyTickets = "";
    }
  }
  incrementKid() {
    if (this.totalTickets < 7){
      this.kid++;
      this.total += 50;
      this.totalTickets++
      this.setState({kid: this.kid, totalTickets: this.totalTickets})
      // this.getBookedSeats();
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
      // this.getBookedSeats();
    }
  }
  decrementAdult() {
    if (this.adult) {
      this.adult--;
      this.total -= 85;
      this.totalTickets--
      this.setState({adult: this.adult, totalTickets: this.totalTickets})
      // this.getBookedSeats();
      this.toMannyTickets = "";
    }
  }
  incrementAdult() {
    if (this.totalTickets < 7) {
      this.adult++;
      this.total += 85;
      // this.getBookedSeats();
      this.totalTickets++
      this.setState({adult: this.adult, totalTickets: this.totalTickets})
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
      // this.getBookedSeats();
    }
  }
  decrementSenior() {
    if (this.senior) {
      this.senior--;
      this.total -= 65;
      this.totalTickets--
      this.setState({senior: this.senior, totalTickets: this.totalTickets})
      // this.getBookedSeats();
      this.toMannyTickets = "";
    }
  }
  incrementSenior() {
    if (this.totalTickets < 7) {
      this.senior++;
      this.total += 65;
      this.totalTickets++;
      this.setState({senior: this.senior, totalTickets: this.totalTickets})
      // this.getBookedSeats();
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
      // this.getBookedSeats();
    }
  }

  render() {
    return (
      <section className="book-ticket">
        <div>
          <div className="theShow">
            <h2>{this.state.title}</h2>
            <h3>📆 {this.program.date}</h3>
            <h3>🕑 {this.program.time}</h3>
          </div>
          <div className="error">
              {this.toMannyTickets}
          </div>
          <div className="ticket-selector">
            <div className="row mt-4 mb-4">
              <div className="price col-12 col-md-4 mt-4">
                <p>Ordinarie (85 kr/st)</p>
                <div className="ticket-incrementor adult">
                  <button
                    className="decrement-adult btn btn-secondary mr-2"
                    onClick={this.decrementAdult.bind(this)}
                  >
                    -
                  </button>
                  {this.adult}
                  <button 
                    className="increment-adult btn btn-secondary ml-2"
                    onClick={this.incrementAdult.bind(this)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="price col-12 col-md-4 mt-4">
                <p>Pensionär (65 kr/st)</p>
                <div className="ticket-incrementor senior">
                  <button 
                    className="decrement-senior btn btn-secondary mr-2"
                    onClick={this.decrementSenior.bind(this)}
                  >
                    -
                  </button>
                  {this.senior}
                  <button 
                    className="increment-senior btn btn-secondary ml-2"
                    onClick={this.incrementSenior.bind(this)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="price col-12 col-md-4 mt-4">
                <p>Barn (50 kr/st)</p>
                <div className="ticket-incrementor kids">
                  <button 
                    className="decrement-kid btn btn-secondary mr-2"
                    onClick={this.decrementKid.bind(this)}
                  >
                    -
                  </button>
                  {this.kid}
                  <button 
                    className="increment-kid btn btn-secondary ml-2"
                    onClick={this.incrementKid.bind(this)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <h4>Totalpris: {this.total}</h4>
          </div>
          <div className="row justify-content-center">
            <div className="screen">
              <img className="light" src={LightImage}
              />
            </div>
          </div>

          <Salong auditorium={this.state.salongName} totalTickets={this.state.totalTickets} bookedSeats={this.bookedSeats}/>
        </div>
      </section>
    );
  }
}

export default BookTicktPage;
