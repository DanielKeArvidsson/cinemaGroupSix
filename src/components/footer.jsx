import React, { Component } from "react";
//import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer" sticky="bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 -md-5">
                <p>FilmVisarnar AB &copy; 2019 av GroupSix</p> 
              </div>
              <div className="col-md-5" id="social-networks" />
            
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
