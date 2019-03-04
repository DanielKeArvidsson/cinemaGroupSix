import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 offset-1 col-sm-2">
                <p className="footerText mt-3">FilmVisarna AB av GroupSix</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
