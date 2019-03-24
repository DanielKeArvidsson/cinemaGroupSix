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
      <div className="col-lg-4 col-md-6 mb-5 mt-3 text-center mt-3 history">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h2>{this.program.movie.title}</h2>
              </CardTitle>
              <CardText>{this.program.auditorium.name} </CardText>
              {this.seats.map((i, index) => {
                return (
                  <p key={index}>
                    Rad: {i.rowNum}, Plats: {i.seatNum} <br />
                  </p>
                );
              })}
              <CardText>
                <span role="img" aria-label="date">
                  📆
                </span>{" "}
                {this.program.date}
              </CardText>
              <CardText>
                <span role="img" aria-label="time">
                  🕑
                </span>{" "}
                {this.program.time}
              </CardText>
              <CardText>
                Pris: {this.price}:-
              </CardText>
              <CardText>Bokningsnummer: {this.bookingNum}</CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default TicketInfo;
