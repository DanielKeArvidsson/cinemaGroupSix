import React, { Component } from "react";
import REST from "../REST";
import MovieInfo from "./MovieInfo";
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
      data: []
    };
  }

  async loadMovies() {
    let movies = await Movie.find();
    for (let movie of movies) {
      this.allMovies.push(movie.title);
      //     console.log(ticket.program.movie.title);
      //     this.allBookings.push(ticket.program.movie.title);
      //   }
    }
    //console.log(this.allMovies);
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
      return a.count - b.count;
    });
    console.log(array);
  }

  async findMovies() {
    let data = await Ticket.find();
    // console.log(data);
    for (let ticket of data) {
      //console.log(ticket.program.movie.title);
      this.allBookings.push(ticket.program.movie.title);
    }
    //console.log(this.allBookings);
    this.countMovies();
  }

  render() {
    return <div className="mt-5">topplista</div>;
  }
}

export default Topplista;
