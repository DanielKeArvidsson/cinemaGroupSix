import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";
class TicketInfo extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-5 mt-3 text-center mt-3">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h2>Filmtitel:{this.movie.title}</h2>
              </CardTitle>
              <CardText>Salong: {this.auditorium.name} </CardText>
              <CardText>Antal: {this.seats}</CardText>
              <CardText>
                Datum: {this.date} Tid: {this.time}
              </CardText>
              <CardText>Bokningsnummer:</CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default TicketInfo;
