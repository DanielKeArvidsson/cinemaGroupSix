import React, { Component } from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

class SalongsInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="salongsInfoPage  col-lg-4 col-md-4 col-sm-12">
          <Col>
            <Card className="salongsInfoCard">
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
                <CardText>{this.info}</CardText>
                <CardText>{this.ljud}</CardText>
                <CardText>{this.projektor}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default SalongsInfoPage;
