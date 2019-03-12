import React from "react";
import REST from "../REST";
import AboutUsPage from "./AboutUsPage";



class Auditorium extends REST {}

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.auditorium = [];
    this.state = {};
    this.auditoriums = [];
    this.loadData();
    console.log(this.auditorium);
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
      <div>
        {this.auditoriums.map(auditorium => {
          return <AboutUsPage key={auditorium._id} {...auditorium} />;
        
        })}
      </div>
    );
  }
}

export default AboutUs;
