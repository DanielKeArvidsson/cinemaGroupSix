import React from "react";
import REST from "../REST";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Col
  } from "reactstrap";

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
    console.log(this.auditoriums);
  }

  render() {
    return (
      <React.Fragment>
        <div>
        {this.auditoriums.map(auditorium => {
          return <auditorium key={auditorium._id} {...auditorium} />;
        })}
        
      </div>
      <div className="show-program col-md-6 col-lg-4 mb-5 mt-3 text-center">
          <Col>
        <Card>
            <CardImg
              top
              width="100%"
              src={require("../images/" + this.auditorium[0].image)}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h2>{this.auditorium[0].name}</h2>
              </CardTitle>
              <CardText>{this.auditorium[0].ljud} </CardText>
              <CardText>
              {this.auditorium[0].projektor}
              </CardText>
            </CardBody>
        </Card>
          </Col>
      </div>
      </React.Fragment>
    );
  }
}

export default SalongsInfo;

