import React, { Component } from "react";
class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
  }
  render() {
    return (
      <div className="movieInfo">
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document" />
        </div>
        <iframe
          className="modal-content"
          src={this.youtubeTrailers}
          title="youtubevideo"
        />
        <div className="row mb-3">
          <div className="moviePic col-md-3">
            <img
              typeName="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              src={require("../images/" + this.images[0])}
              alt="bild från film"
            />
            <img
              className="playBtn"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              src={require("../images/playButton.png")}
              alt="Playknapp"
            />
          </div>
          <div className="col-md-9">
            <div className="col-12">
              <h1>{this.title}</h1>
              <p>
                {this.time} | {this.genre}
              </p>
              <p>{this.description}</p>
            </div>
          </div>
          <div className="buttonBiljett col-md-3 mb-3">
            <a
              className="btn btn-success mt-3 pt-3 pb-3 btn-block mb-4"
              href="#biljett"
              role="button"
            >
              Biljetter
            </a>
          </div>
        </div>
        <div className="col-12 mb-5">
          <p> Skådespelare: {this.actors.join(", ")}.</p>
          <p>År: {this.productionYear}</p>
          <p>Språk: {this.language}</p>
          <p>Undertext: {this.subtitles}</p>
          <p>Regissör: {this.director}</p>
          <p>Produktionsland: {this.productionCountries.join(" ")}</p>
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
