import React from "react";
import REST from "../REST";
import Show from "./Show";

class Program extends REST {}

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 12
    };
    this.shows = [];
    this.loadData();
    this.moreShows = this.moreShows.bind(this);
  }

  async loadData() {
    let data = await Program.find(
      `.find().populate('movie auditorium').sort({"date": 1, "time": 1}).limit(${
        this.state.count
      }).exec()`
    );
    this.shows = data;
    this.setState({ state: this.state });
  }
  async moreShows() {
    await this.setState(prevState => ({ count: prevState.count + 12 }));
    this.loadData();
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
          <button
            className="btn btn-primary mt-5 mb-5"
            onClick={this.moreShows}
          >
            Fler visningar
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowPage;
