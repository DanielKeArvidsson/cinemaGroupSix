import React, { Component } from "react";
class Show extends Component {
  constructor(props) {
    super(props);
    //props kommer ifrån showPage
    console.log("My props", props, "this", this);
    // här assignar vi så att man kommer åt props ifrån pappaklassen
    //så slipper man skriva this.props.movie.title, det blir istället
    // this.movie.title
    Object.assign(this, props);
    this.state = {};
  }
  render() {
    return (
      <p>
        {this.movie.title} {this.time}
      </p>
    );
  }
}

export default Show;
