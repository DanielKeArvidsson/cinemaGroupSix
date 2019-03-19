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
    console.log(this)
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
      this.toMannyTickets = "";
    }
  }
  incrementKid() {
    if (this.totalTickets < 7){
      this.kid++;
      this.total += 50;
      this.totalTickets++
      this.setState({kid: this.kid, totalTickets: this.totalTickets})
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
    }
  }
  decrementAdult() {
    if (this.adult) {
      this.adult--;
      this.total -= 85;
      this.totalTickets--
      this.setState({adult: this.adult, totalTickets: this.totalTickets})
      this.toMannyTickets = "";
    }
  }
  incrementAdult() {
    if (this.totalTickets < 7) {
      this.adult++;
      this.total += 85;
      this.totalTickets++
      this.setState({adult: this.adult, totalTickets: this.totalTickets})
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
    }
  }
  decrementSenior() {
    if (this.senior) {
      this.senior--;
      this.total -= 65;
      this.totalTickets--
      this.setState({senior: this.senior, totalTickets: this.totalTickets})
      this.toMannyTickets = "";
    }
  }
  incrementSenior() {
    if (this.totalTickets < 7) {
      this.senior++;
      this.total += 65;
      this.totalTickets++;
      this.setState({senior: this.senior, totalTickets: this.totalTickets})
    } else {
      this.toMannyTickets = <div className="alert alert-danger mt-4" role="alert"> Det går bara att boka 7 biljetter åt gången! </div>
      this.setState({tickets: this.totalTickets});
    }
  }

  render() {
    return (
      <section className="book-ticket">
          <Salong auditorium={this.state.salongName} totalTickets={this.state.totalTickets} bookedSeats={this.bookedSeats}/>
      </section>
    );
  }
}

export default BookTicktPage;
