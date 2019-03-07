import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className="movieInfo">
        <Modal
          size="xl"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.title}</ModalHeader>
          <ModalBody>
            <div
              className="videoHolder"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                src={this.youtubeTrailers}
                frameBorder="0"
                title="youtubevideo"
              />
            </div>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Stäng
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>

        <div className="row mb-3 ml-3">
          <div className="moviePic col-xl-3" onClick={this.toggle}>
            <img
              typeName="button"
              src={require("../images/" + this.images[0])}
              alt="bild från film"
            />
            <img
              className="playBtn"
              src={require("../images/playButton.png")}
              alt="Playknapp"
            />
          </div>
          <div className="col-xl-9">
            <div className="col-12 mr-3">
              <Jumbotron>
                <h1 className="display-3">{this.title}</h1>
                <p>{this.genre}</p>
                <p className="lead">{this.description}</p>
                <hr className="my-2" />
                <p> Skådespelare: {this.actors.join(", ")}.</p>
                <p>År: {this.productionYear}</p>
                <p>Språk: {this.language}</p>
                <p>Undertext: {this.subtitles}</p>
                <p>Regissör: {this.director}</p>
                <p>Produktionsland: {this.productionCountries.join(" ")}</p>
              </Jumbotron>
            </div>
          </div>
        </div>
        <h2>Recensioner</h2>
        <div className="row recension">
          <div className="col-md-4 mt-4">
            <h3>{this.reviews[1].source} </h3>
            <q>{this.reviews[1].quote}</q>
            <p>
              Betyg: ${this.reviews[1].stars} stjärnor utav{" "}
              {this.reviews[1].max} möjliga{" "}
            </p>
          </div>
          <div className="col-md-4 mt-4">
            <h3>{this.reviews[0].source} </h3>
            <q>{this.reviews[0].quote}</q>
            <p>
              Betyg: {this.reviews[0].stars} stjärnor utav {this.reviews[0].max}{" "}
              möjliga{" "}
            </p>
          </div>
          <div className="col-md-4 mt-4">
            <h3>{this.reviews[2].source} </h3>
            <q>{this.reviews[2].quote}</q>
            <p>
              Betyg: {this.reviews[2].stars} stjärnor utav {this.reviews[2].max}{" "}
              möjliga{" "}
            </p>
          </div>
        </div>

        <div id="biljett" />
        <h2>Boka biljetter</h2>

        <div className="shows container">
          <div className="row">
            <div className="col-4 tabell">
              <b>Tid</b>
            </div>
            <div className="col-4 tabell">
              <b>Datum</b>
            </div>
            <div className="col-4 tabell">
              <b>Salong</b>
            </div>
          </div>
          {this.show}
        </div>
      </div>
    );
  }
}

export default MovieInfo;
