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
   // console.log("My props", props, "this", this);
    // här assignar vi så att man kommer åt props ifrån pappaklassen
    //så slipper man skriva this.props.movie.title, det blir istället
    // this.movie.title
    Object.assign(this, props);
    this.state = {};
  }


  render() {
    return (
      <div className="show-program col-md-6 col-lg-3  mb-3 mt-5 text-center">
          <Col>
        <Card>
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
              <Button className="mr-2 mb-2 ">Boka</Button>
              <Button className="lg-ml-4 mb-2">Mer info om filmen</Button>
            </CardBody>
        </Card>
          </Col>
      </div>

    );
  }
}

export default Show;
