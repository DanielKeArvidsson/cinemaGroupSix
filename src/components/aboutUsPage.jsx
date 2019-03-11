import React, { Component } from "react";
// import AboutusImage from "../images/aboutusImage.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
  
  }
  render() {
    return (
      <React.Fragment>
           <div className="aboutus  col-lg-3 col-md-4 col-sm-12">
          <Col>
            <Card className="aboutusInfoCard">
              <CardImg
                top
                width="100%"
                src={require("../images/" + this.aboutusImage)}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h2>{this.aboutusName}</h2>
                </CardTitle>
                <CardText>{this.aboutUs}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
        <div className="aboutus  col-lg-3 col-md-4 col-sm-12">
          <Col>
            <Card className="aboutusInfoCard2">
              <CardBody>
                <CardTitle>
                  <h2>{this.auditorium[0].regulationName}</h2>
                </CardTitle>
                <CardText>{this.auditorium[0].regulations}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsPage;