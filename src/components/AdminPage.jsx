import React, { Component } from "react";
import AdminShows from "./AdminShows";
import REST from "../REST";

class Program extends REST {}

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shows = [];
    this.loadData();
  }
  async loadData() {
    let data = await Program.find(
      `.find().populate('movie auditorium').sort({"date": 1, "time": 1}).exec()`
    );
    this.shows = data;
    this.setState({ state: this.state });
  }
  render() {
    return (
      <div>
        <button>Lägg till program</button>
        <div>
          {this.shows.map(show => {
            return <AdminShows key={show._id} {...show} />;
          })}
        </div>
      </div>
    );
  }
}

export default AdminPage;
