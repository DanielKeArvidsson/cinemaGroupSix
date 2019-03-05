import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="wrapper">
          
          </div>
          <footer class="footer" sticky="bottom">
            <div className="container text-center">
              <div className="row">
                <div className="col-md-5">
                  <p>FilmVisarnar AB &copy; 2019</p>
                  <p>Kontakta Support</p>
                </div>
                <div className="col-md-5" id="social-networks" />
              </div>
            </div>
          </footer>
        </body>
      </React.Fragment>
    );
  }
}

export default Footer;
