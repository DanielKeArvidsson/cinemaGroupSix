import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import REST from "../REST";
import App from "../App";
import NavBar from "./NavBar";

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

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { userEmail: "", userPassword: "" },
      modalShow: false,
      message: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalShow: !prevState.modalShow
    }));
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  async userLogin() {
    let newLogin = new Login({
      email: this.state.account.userEmail,
      password: this.state.account.userPassword
    });
    let user = await User.find(`.find({email: '${newLogin.email}'})`);
    let result = await newLogin.save();
    if (result.error && result.error === "The password does not match!") {
      this.toggleModal();
      this.setState({ message: "Lösenordet är felaktigt!" });
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
      this.toggleModal();
      this.setState({ message: "E-postadressen är ogiltig!" });
    } else if (result.loggedIn === true) {
      App.isLoggedin = true;
      this.toggleModal();
      this.setState({ message: "Hej! Du är nu inloggad." });
      NavBar.lastInstance.setState(state => NavBar.lastInstance);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.userLogin();
  };

  render() {
    return (
      <div className="loginContainer">
        <Form onSubmit={this.handleSubmit}>
          <div className="header">Logga in</div>
          <FormGroup>
            <Label for="userEmail">E-post</Label>
            <Input
              value={this.state.account.userEmail}
              onChange={this.handleChange}
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="E-post"
              className="formControl"
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Lösenord</Label>
            <Input
              value={this.state.account.userPassword}
              onChange={this.handleChange}
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="Lösenord"
              className="formControl"
            />
          </FormGroup>
          <Button>Bekräfta</Button>
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
              <Link
                to="/home"
                className="btn btn-secondary"
                onClick={this.toggleModal}
              >
                Stäng
              </Link>
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
