import React, { Component } from "react";
import {
  Card,
  FormGroup,
  Input,
  Label,
  CardTitle,
  CardText,
  Row,
  Col,
  Button
} from "reactstrap";
import REST from "../REST";
import App from "../App";
class Program extends REST {}

class ProgramUpdate extends Component {
  constructor(props) {
    super(props);
    this.updateMovie = this.updateMovie.bind(this);
    this.updateAuditorium = this.updateAuditorium.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.postUpdate = this.postUpdate.bind(this);
    this.saveNew = this.saveNew.bind(this);
    this.programUpdated = false;
    this.programCreated = false;
    this.state = {
      _id: "",
      movie: "",
      auditorium: "",
      time: "",
      date: ""
    };
  }
  updateMovie(e) {
    const target = e.target.value;
    this.setState({
      movie: target
    });
  }
  updateAuditorium(e) {
    const target = e.target.value;
    this.setState({
      auditorium: target
    });
  }
  updateTime(e) {
    const target = e.target.value;
    this.setState({
      time: target
    });
  }
  updateDate(e) {
    const target = e.target.value;
    this.setState({
      date: target
    });
  }
  async postUpdate() {
    let tempProg = await Program.find(`.findById('${this.props.program._id}')`);
    tempProg.movie = this.state.movie;
    tempProg.auditorium = this.state.auditorium;
    tempProg.time = this.state.time;
    tempProg.date = this.state.date;
    await tempProg.save();
    this.programUpdated = true;
    this.setState({ state: this.state });
  }
  async saveNew() {
    let program = new Program({
      movie: this.state.movie,
      auditorium: this.state.auditorium,
      time: this.state.time,
      date: this.state.date
    });
    await program.save();
    this.programCreated = true;
    this.setState({ state: this.state });
  }

  render() {
    return (
      <div className={App.admin ? "" : "d-none"}>
        <h2 className="text-white text-center">
          Information om programmet i nuvarande form
        </h2>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Card body className="bg-dark text-white">
              <CardTitle>
                <h4>Filmtitel: {this.props.program.movie.title}</h4>
              </CardTitle>
              <CardText className="text-white">
                Salong: {this.props.program.auditorium.name}
              </CardText>
              <CardText className="text-white">
                Datum: {this.props.program.date} Tid: {this.props.program.time}
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="3 float-left text-white bg-dark mt-3 text-left">
            <h3>Välj film</h3>
            {this.props.movie.map((movie, index) => {
              return (
                <FormGroup check>
                  <Label check>
                    <Input
                      key={index}
                      type="radio"
                      name="movieTitle"
                      value={movie._id}
                      onClick={this.updateMovie}
                    />{" "}
                    {movie.title}
                  </Label>
                </FormGroup>
              );
            })}
          </Col>
          <Col sm="3 float-left text-white bg-dark mt-3 text-left">
            <h3>Välj salong.</h3>
            {this.props.auditorium.map(auditorium => {
              return (
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="auditoriumName"
                      onClick={this.updateAuditorium}
                      value={auditorium._id}
                    />{" "}
                    {auditorium.name}
                  </Label>
                </FormGroup>
              );
            })}
          </Col>
          <Col sm="3 mt-3">
            <h3 className="text-white">Välj tid.</h3>
            <FormGroup>
              <Label for="programTime" />
              <Input
                onChange={this.updateTime}
                type="time"
                name="time"
                id="programTime"
                placeholder="time placeholder"
              />
            </FormGroup>
          </Col>
          <Col sm="3 mt-3">
            <h3 className="text-white">Välj datum.</h3>
            <FormGroup>
              <Label for="programDate" />
              <Input
                onChange={this.updateDate}
                type="date"
                name="date"
                id="programDate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <h3 className={"mt-2 " + (this.programUpdated ? "" : "d-none")}>
              Programmet uppdaterades
            </h3>
            <Button className="btn-success mt-2" onClick={this.postUpdate}>
              Uppdatera program
            </Button>
            <h3 className={"mt-2 " + (this.programCreated ? "" : "d-none")}>
              Programmet skapades
            </h3>
            <Button className="btn-success mt-2" onClick={this.saveNew}>
              Skapa nytt
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProgramUpdate;
