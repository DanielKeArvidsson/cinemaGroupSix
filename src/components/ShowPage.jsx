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
  }
  moreShows() {
    // console.log(this.counter);
    this.counter = this.counter + 12;
  }

  render() {
    return (
      <React.Fragment>
      <div className="showPageHeadLine col-lg-6 col-md-6 text-center">
        <h1>Aktuella Visningar</h1>
        </div>
        <div>
        {this.shows.map(show => {
          return <Show key={show._id} {...show} />;
        })}
        <button className="btn btn-primary" onClick={this.moreShows}>
          Fler visningar
        </button>
      </div>
      </React.Fragment>
    );
  }
}

export default ShowPage;
