import React from "react";
import REST from "../REST";
import Show from "./Show";
class Program extends REST {}

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shows = [];
    this.loadData();
  }

  async loadData() {
   
    let data = await Program.find(
      `.find().populate('movie auditorium ').sort({"date": 1, "time": 1}).limit(10).exec()`
    );

    
    this.shows = data;
    this.setState({ state: this.state });
    console.log(this.shows);
  }

  render() {
    return (
      <div>
        <h1>Aktuella Visningar</h1>
        {this.shows.map(show => {
          return <Show key={show._id} {...show} />;
        })}
      </div>
    );
  }
}

export default ShowPage;
