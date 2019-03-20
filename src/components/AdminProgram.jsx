import React, { Component } from "react";
import ProgramUpdate from "./ProgramUpdate";
import REST from "../REST";

class Program extends REST {}
class Auditorium extends REST {}
class Movie extends REST {}

class AdminProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: { movie: {}, auditorium: {} },
      movies: [],
      auditoriums: []
    };
  }
  async componentDidMount() {
    await this.findProgram();
  }
  async findProgram() {
    let movieData = await Movie.find();
    let programData = await Program.find(
      `.findById('${this.props.match.params.id}')`
    );
    let auditoriumData = await Auditorium.find();
    this.setState({
      program: programData,
      movies: movieData,
      auditoriums: auditoriumData
    });
  }
  render() {
    return (
      <div className="mt-5">
        <ProgramUpdate
          key="1"
          program={this.state.program}
          movie={this.state.movies}
          auditorium={this.state.auditoriums}
        />
      </div>
    );
  }
}

export default AdminProgram;
