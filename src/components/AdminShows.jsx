import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Button, Col } from "reactstrap";
import REST from "../REST";

class Program extends REST {}

class AdminShows extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
  }
  async deleteOne() {
    await Program.find(`.find().deleteOne(${this._id})`);
  }
  render() {
    return (
      <div className="show-program col-lg-4 col-md-6 mb-5 mt-3 text-center">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h2>{this.movie.title}</h2>
              </CardTitle>
              <CardText>{this.auditorium.name} </CardText>
              <CardText>
                {this.date} {this.time}{" "}
              </CardText>
              <Button
                onClick={this.deleteOne}
                className="btn btn-danger mr-2 mb-2 "
              >
                Ta bort
              </Button>
              <Button className="btn btn-primary mb-2">
                <Link to={"/admin-update/" + this._id}>
                  Ändra eller skapa program
                </Link>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default AdminShows;
