import React from "react";
import REST from "../REST";
import Show from "./Show";
import {
  Col,
  Row
} from "reactstrap";

class Program extends REST { }

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 12
    };
    this.shows = [];
    this.loadData();
    this.moreShows = this.moreShows.bind(this);
  }

  async loadData() {
    let data = await Program.find(
      `.find().populate('movie auditorium').sort({"date": 1, "time": 1}).limit(${
      this.state.count
      }).exec()`
    );
    this.shows = data;
    this.setState({ state: this.state });
  }
  async moreShows() {
    await this.setState(prevState => ({ count: prevState.count + 12 }));
    this.loadData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="showPageHeadLine mt-4">
          <h1>Aktuella Visningar</h1>
        </div>
        <Row>
        {this.shows.map(show => {
          return <Show key={show._id} {...show} />;
        })}
        </Row>
        <div className="row">
        <Col>
            <button
              className="btn btn-primary mt-4 mb-3 col-md-2"
              onClick={this.moreShows}
            >
              Fler visningar
            </button>
        </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowPage;
