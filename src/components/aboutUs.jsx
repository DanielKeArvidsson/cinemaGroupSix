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
    // this.loadsData();
    this.loadAuditorium();
    
  }
   async loadAuditorium() {
    this.auditorium = await Auditorium.find();
  
 

  // async loadsData() {
  //   let data = await Auditorium.find(
     
  //   );
    this.auditoriums = Auditorium;
    console.log(this.auditorium);

    this.setState({ state: this.state });
  }

  render() {
    return (
      <div>
        {this.auditorium.map(auditorium => {
          return <AboutUsPage key={auditorium._id} {...auditorium} />;
        
        })}
      </div>
    );
  }
}

export default AboutUs;
