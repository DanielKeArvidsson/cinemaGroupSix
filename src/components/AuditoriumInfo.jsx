import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

class AuditoriumInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
    console.log(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="show-program col-md-6 col-lg-4 mb-5 mt-3 text-center">
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src={require("../images/" + this.image)}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h2>{this.name}</h2>
                </CardTitle>
                <CardText>{this.ljud} </CardText>
                <CardText>{this.projektor}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default AuditoriumInfo;
