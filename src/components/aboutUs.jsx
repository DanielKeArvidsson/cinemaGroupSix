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
    let data = await Auditorium.find(
     
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
