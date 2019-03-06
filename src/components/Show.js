import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from "reactstrap";
class Show extends Component {
  constructor(props) {
    super(props);
    //props kommer ifrån showPage
    console.log("My props", props, "this", this);
    // här assignar vi så att man kommer åt props ifrån pappaklassen
    //så slipper man skriva this.props.movie.title, det blir istället
    // this.movie.title
    Object.assign(this, props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <Col xs="4">
            <CardImg
              top
              width="100%"
              src={require("../images/" + this.movie.images[0])}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{this.movie.title}</CardTitle>
              <CardText>{this.auditorium.name} </CardText>
              <CardText>
                {this.date} {this.time}{" "}
              </CardText>
              <Button className="mr-4">Boka</Button>
              <Button>Mer info om filmen</Button>
            </CardBody>
          </Col>
        </Card>
      </div>
    );
  }
}

export default Show;
