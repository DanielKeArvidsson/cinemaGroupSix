import React, { Component } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginPage = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  };

  showRegisterPage = () => {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  };

  render() {
    return (
      <div className="container" style={formStyle}>
        <div className="box-controller">
          <div
            className={
              "controller" +
              (this.state.isLoginOpen ? "activeLinkController" : "")
            }
            style={controllerStyle}
            onClick={this.showLoginPage.bind(this)}
          >
            logga in |
          </div>
          <div
            className={
              "controller" +
              (this.state.isRegisterOpen ? "activeLinkController" : "")
            }
            onClick={this.showRegisterPage.bind(this)}
            style={controllerStyle}
          >
            registrera
          </div>
        </div>
        <div className="box-container" style={boxControlStyle}>
          {this.state.isLoginOpen && <LoginPage />}
          {this.state.isRegisterOpen && <RegisterPage />}
        </div>
      </div>
    );
  }
}

const formStyle = {
  width: "30%",
  margin: "0 auto",
  paddingTop: "10%",
  textAlign: "center"
};

const controllerStyle = {
  display: "inline-block",
  textAlign: "center",
  fontSize: "18px",
  cursor: "pointer",
  paddingLeft: "3px"
};

const boxControlStyle = {
  paddingTop: "2rem",
  textAlign: "center"
};

export default FormPage;
