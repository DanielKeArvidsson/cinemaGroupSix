import React, { Component } from "react";
import REST from "../REST";
import MovieInfo from "./MovieInfo";
class Program extends REST {}
class Movie extends REST {}
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.movie = [];
    this.program = [];
    this.loadData();
  }
  async loadData() {
    let dataMovie = await Movie.find(
      `.find({_id:'${this.props.match.params.id}'})`
    );
    this.movie = dataMovie;
    let dataProgram = await Program.find(
      `.find({ movie: { $in: ["${this.props.match.params.id}"] } })`
    );
    this.program = dataProgram;
    this.setState({ state: this.state });
    console.log(dataProgram);
  }

  render() {
    return (
      <div>
        {this.movie.map(movieInfo => {
          return <MovieInfo key={movieInfo._id} {...movieInfo} />;
        })}
      </div>
    );
  }
}

export default Movies;
