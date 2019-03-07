import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer" sticky="bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 -md-5">
                <h6>FilmVisarnar AB &copy; 2019 av GroupSix <h6 class="phone fas fa-phone-square">040-123456</h6></h6> 
                <i class="fab fa-facebook-square"></i><i class="fab fa-instagram"></i><i class="fab fa-twitter-square"></i>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
