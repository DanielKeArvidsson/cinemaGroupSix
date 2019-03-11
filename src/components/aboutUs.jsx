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
    this.loadAuditorium();
  }
  async loadAuditorium() {
    this.auditorium = await Auditorium.find();
    this.setState({ state: this.state });
    console.log(this.auditorium);
  }

  render()
   {
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
