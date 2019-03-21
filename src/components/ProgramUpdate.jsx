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
      programTime: ["16:00", "17:00", "18:00", "19:00", "20:00"],
      programDate: [
        "2019-03-11",
        "2019-03-23",
        "2019-03-24",
        "2019-03-25",
        "2019-03-26"
      ],
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
      <div>
        <h1>Information om programmet i nuvarande form</h1>
        <Row>
          {console.log()}
          <Col sm={{ size: 8, offset: 2 }}>
            <Card body className="bg-dark text-white">
              <CardTitle>
                <h3>Filmtitel: {this.props.program.movie.title}</h3>
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
            {this.props.movie.map(movie => {
              return (
                <FormGroup check>
                  <Label check>
                    <Input
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
          <Col sm="3 float-left text-white bg-dark mt-3 text-left">
            <h3>Välj tid.</h3>
            {this.state.programTime.map(time => {
              return (
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="time"
                      value={time}
                      onClick={this.updateTime}
                    />{" "}
                    {time}
                  </Label>
                </FormGroup>
              );
            })}
          </Col>
          <Col sm="3 float-left text-white bg-dark mt-3 text-left">
            <h3>Välj datum.</h3>
            {this.state.programDate.map(date => {
              return (
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="date"
                      onClick={this.updateDate}
                      value={date}
                    />{" "}
                    {date}
                  </Label>
                </FormGroup>
              );
            })}
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
