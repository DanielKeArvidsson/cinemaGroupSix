import React from "react";
import REST from "../REST";
import AboutUsPage from "./aboutUsPage";

class Auditorium extends REST {}

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.auditorium = [];
    this.state = {};
    this.auditoriums = [];
    this.loadsData();
  }

  async loadsData() {
    let data = await Auditorium.find();
    this.auditorium = data[0];

    this.setState({ state: this.state });
  }

  render() {
    return (
      <div>
        <AboutUsPage key={this.auditorium._id} {...this.auditorium} />;
      </div>
    );
  }
}

export default AboutUs;
