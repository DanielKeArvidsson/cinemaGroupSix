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
      `.find().populate('movie auditorium').sort({"date": 1, "time": 1}).limit(10).exec()`

    );

    
    this.shows = data;
    this.setState({ state: this.state });
    console.log(this.shows);
  }

  render() {
    return (
      <React.Fragment>
      <div className="showPageHeadLine col-md-6 col-lg-3  mb-3 mt-5 text-center">
        <h1>Aktuella Visningar</h1>
        </div>
        <div>
        {this.shows.map(show => {
          return <Show key={show._id} {...show} />;
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default ShowPage;
