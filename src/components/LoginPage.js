import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from "reactstrap";
import { Link } from "react-router-dom";
import REST from "../REST";
import App from "../App";
import NavBar from "./NavBar";
import FormComp from "./FormComp";

class User extends REST {}

class Login extends REST {
  async delete() {
    this._id = 1;
    return super.delete();
  }
  static get baseRoute() {
    return "login/";
  }
}

export class LoginPage extends FormComp {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
      modalShow: false,
      message: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateLogin();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.submitForm();
    this.setState({ data: "" });
  };

  async submitForm() {
    let newLogin = new Login({
      email: this.state.data.email,
      password: this.state.data.password
    });
    let user = await User.find(`.find({email: '${newLogin.email}'})`);
    let result = await newLogin.save();
    if (result.error && result.error === "The password does not match!") {
      this.rerender("Lösenordet är felaktigt!");
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
      this.rerender("E-postadressen är ogiltig!");
    } else if (result.loggedIn === true) {
      App.isLoggedin = true;
      this.rerender("Hej! Du är nu inloggad.");
      NavBar.lastInstance.setState(state => NavBar.lastInstance);
    }
  }

  render() {
    return (
      <div className="loginContainer">
        <Form onSubmit={this.handleSubmit}>
          <div className="header">Logga in</div>
          {this.renderInput("email", "E-post", "email")}
          {this.renderInput("password", "Lösenord", "password")}
          {this.renderButton("Logga in")}
        </Form>
        {this.state.modalShow ? (
          <Modal
            isOpen={this.state.modalShow}
            toggle={this.toggleModal}
            className="buttons-div"
          >
            <ModalHeader toggle={this.toggleModal} />
            <ModalBody>
              <p>{this.state.message}</p>
            </ModalBody>
            <ModalFooter>
              {this.state.message === "Hej! Du är nu inloggad." ? (
                <Link
                  to="/home"
                  className="btn btn-secondary"
                  onClick={this.toggleModal}
                >
                  Stäng
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-secondary"
                  onClick={this.toggleModal}
                >
                  Stäng
                </Link>
              )}
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LoginPage;
