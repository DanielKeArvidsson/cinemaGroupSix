import React, { Component } from "react";
class ProgramUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProgram: []
    };
    Object.assign(this, props);
  }
  componentDidMount() {
    let newArray = [];

    newArray.push(
      <p key="{this.program._id}">{this.program.auditorium.name}</p>
    );
    this.setState({
      currentProgram: newArray
    });
  }
  render() {
    return (
      <div>
        <h1>Information om programmet i nuvarande form</h1>
        {this.state.currentProgram}
        {console.log(this.props.program)}
        <p>{console.log(this.props.movie)}</p>
      </div>
    );
  }
}

export default ProgramUpdate;
