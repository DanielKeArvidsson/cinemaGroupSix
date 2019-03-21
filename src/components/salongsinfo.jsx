import React from "react";
import REST from "../REST";
import SalongsInfoPage from "./salongsInfoPage";



class Auditorium extends REST {}

class SalongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.auditorium = [];
    this.state = {};
    this.auditoriums = [];
    this.loadData();
  }

  async loadData() {
    let data = await Auditorium.find(
      `.find().populate('auditorium auditorium').sort({"auditorium": 1, "auditorium": 1}).limit(${
        this.auditorium
      }).exec()`
    );
    this.auditoriums = data;

    this.setState({ state: this.state });
  }

  render() {
    return (
      <div className="row">
        {this.auditoriums.map(auditorium => {
          return <SalongsInfoPage key={auditorium._id} {...auditorium} />;
        
        })}
      </div>
    );
  }
}

export default SalongsInfo;
