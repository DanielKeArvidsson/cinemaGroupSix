import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import REST from "../REST";
class Movie extends REST {}
class Ticket extends REST {}

export class Topplista extends Component {
  constructor(props) {
    super(props);
    this.allBookings = [];
    this.allMovies = [];
    this.loadMovies();
    this.findMovies();

    this.state = {
      lista: []
    };
  }

  async loadMovies() {
    let movies = await Movie.find();
    for (let movie of movies) {
      this.allMovies.push(movie.title);
    }
  }

  countMovies() {
    let array = [];
    for (let movie of this.allMovies) {
      let count = 0;
      for (let booking of this.allBookings) {
        if (booking === movie) {
          count++;
        }
      }
      array.push({ movie, count });
    }

    array.sort(function(a, b) {
      return b.count - a.count;
    });
    let topplista = [];
    for (let i = 0; i < array.length; i++) {
      topplista.push(array[i].movie);
    }
    this.setState({ lista: topplista });
  }

  async findMovies() {
    let data = await Ticket.find();
    for (let ticket of data) {
      this.allBookings.push(ticket.program.movie.title);
    }
    this.countMovies();
  }

  render() {
    return (
      <Container style={lista}>
        <Row>
          <Col>
            {this.state.lista.map(item => (
              <li>{item}</li>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
const lista = {
  color: "white"
};

export default Topplista;
