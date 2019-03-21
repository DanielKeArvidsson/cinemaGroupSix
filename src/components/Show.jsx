import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  
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
      <div className="show-program col-lg-4 col-md-6 mb-3 mt-3 text-center">

          <Card>
            <CardImg
              top
              width="100%"
              src={require("../images/" + this.movie.images[0])}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h4>{this.movie.title}</h4>
              </CardTitle>
              <CardText>{this.auditorium.name} </CardText>
              <CardText>
                {'📆'}{this.date}
              </CardText>
              <CardText>
                {'🕑'}{this.time}
              </CardText>
              <Link className="btn btn-success col-12 mt-3 mb-2 " to={"/bokabiljett/" + this._id}>
                Boka
              </Link>
                <Link className="btn btn-primary col-12 mb-2" to={"/movie/" + this.movie._id}>
                  Mer info om filmen
              </Link>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default Show;
