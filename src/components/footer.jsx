import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <div className="row">
            <div className="col">
              <ul>
                <li>FilmVisarna AB &copy; 2019</li>
                <li>Kontakt: 040 123456</li>
                <li>Email: filmvisarna@groupsix.se</li>
                <li>Samarbetspartner: GroupSix</li>
              </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
