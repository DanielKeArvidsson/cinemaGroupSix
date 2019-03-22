import React, { Component } from "react";
import { Button } from "reactstrap";
import InputField from "./InputField";

export class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
      message: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalShow: !prevState.modalShow
    }));
  }

  validateInput = input => {
    if (input.name === "firstName") {
      if (input.name.trim() === "") return "Förnamn saknas.";
    }
    if (input.name === "lastName") {
      if (input.name.trim() === "") return "Efternamn saknas.";
    }
    if (input.name === "email") {
      if (input.name.trim() === "") return "E-post saknas.";
    }
    if (input.name === "password") {
      if (input.name.trim() === "") return "Lösenord saknas.";
    }
  };

  validateLogin = () => {
    const errors = {};
    const { data } = this.state;
    if (data.email.trim() === "") errors.email = "E-post saknas.";
    if (data.password.trim() === "") errors.password = "Lösenord saknas.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateRegister = () => {
    const errors = {};
    const { data } = this.state;
    if (data.firstName.trim() === "") errors.firstName = "Förnamn saknas.";
    if (data.lastName.trim() === "") errors.lastName = "Efternamn saknas.";
    if (data.email.trim() === "") errors.email = "E-post saknas.";
    if (data.password.trim() === "") errors.password = "Lösenord saknas.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const error = this.validateInput(input);
    if (error) errors[input.name] = error;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  rerender(modalMessage) {
    this.toggleModal();
    this.setState({ message: modalMessage });
  }

  renderButton(name) {
    return <Button className="login-button">{name}</Button>;
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <InputField
        name={name}
        value={data[name]}
        label={label}
        type={type}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default FormComp;
