import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer">

          <div className="container">
            <div className="row mb-0 info">

              <div className="col-lg-4">
                <p>Telefon: 040 123456</p>
              </div>

              <div className="col-lg-4">
                <p>Email: filmvisarna@groupsix.se</p>
              </div>

              <div className="col-lg-4">
                <p>Samarbetspartner: GroupSix</p>
              </div>
            </div>
            <div className="row mt-0 filmvisarna">
              <div className="col">
                <p>FilmVisarna AB &copy; 2019</p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
