import React, { Component } from "react";
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import REST from "../REST";
import FormComp from "./FormComp";
class User extends REST {}

class RegisterPage extends FormComp {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      errors: {},
      modalShow: false,
      message: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateRegister();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.submitForm();
  };

  async submitForm() {
    const { data } = this.state;
    let newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    });
    let user = await User.find(`.find({email: '${newUser.email}'})`);
    if (user.length === 0) {
      newUser.save();
      this.rerender("Registrering är slutförd! Vänligen logga in.");
      return;
    } else {
      this.rerender(
        "Användaren finns redan! Försök med en annan e-postadress."
      );
      return;
    }
  }

  render() {
    return (
      <div className="register-container">
        <Form onSubmit={this.handleSubmit}>
          <div className="header">Registrera</div>
          {this.renderInput("firstName", "Förnamn", "firstName")}
          {this.renderInput("lastName", "Efternamn", "lastName")}
          {this.renderInput("email", "E-post", "email")}
          {this.renderInput("password", "Lösenord", "password")}
          {this.renderButton("Registrera")}
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
              <Button className="btn btn-secondary" onClick={this.toggleModal}>
                Stäng
              </Button>
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default RegisterPage;
