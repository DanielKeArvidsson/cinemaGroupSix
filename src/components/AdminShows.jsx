import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Button, Col } from "reactstrap";
import REST from "../REST";

class Program extends REST {}

class AdminShows extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.deletedProg = false;
    this.foundProgram = {};
    this.state = {
      deleted: {}
    };
  }
  async deleteOne(e) {
    this.deletedProg = true;
    let foundProgram = await Program.find(`.findById('${e.target.value}')`);
    await foundProgram.delete();
  }

  render() {
    return (
      <div className="show-program col-lg-4 col-md-6 mb-5 mt-3 text-center">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h4>{this.movie.title}</h4>
              </CardTitle>
              <CardText>{this.auditorium.name} </CardText>
              <CardText>
                {this.date} {this.time}{" "}
              </CardText>
              <Button
                value={this.id}
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
