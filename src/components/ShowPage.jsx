import React from "react";
import REST from "../REST";
import Show from "./Show";
class Program extends REST {}

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 12;
    this.state = {};
    this.shows = [];
    this.loadData();
  }

  async loadData() {
    let data = await Program.find(
      `.find().populate('movie auditorium').sort({"date": 1, "time": 1}).limit(${
        this.counter
      }).exec()`
    );
    this.shows = data;
    this.setState({ state: this.state });
    console.log(this.shows);
  }
  moreShows() {
    console.log(this.counter);
    this.counter = this.counter + 12;
  }

  render() {
    return (
      <div>
        <h1>Aktuella Visningar</h1>
        {this.shows.map(show => {
          return <Show key={show._id} {...show} />;
        })}
        <button onClick={this.moreShows}>Fler visningar</button>
      </div>
    );
  }
}

export default ShowPage;
