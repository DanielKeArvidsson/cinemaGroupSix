import React, { Component } from "react";
import CandyImage from "../images/popcornanddrink.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.auditorium = [];
    Object.assign(this, props);
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="aboutUsInfoPage  col-lg-4 col-md-4 col-sm-12">
          <Col>
            <Card className="candyInfoCard">
              <CardImg
                top
                width="100%"
                src= {CandyImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h2>{this.props.butikName}</h2>
                </CardTitle>
                <CardText>{this.props.butik}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsPage;