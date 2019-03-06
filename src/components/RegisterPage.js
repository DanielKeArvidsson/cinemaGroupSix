import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import REST from "../REST";
class User extends REST {}

class RegisterPage extends Component {
  state = {
    account: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.registerUser();
  };

  async registerUser() {
    let newUser = new User({
      firstName: this.state.account.userFirstName,
      lastName: this.state.account.userLastName,
      email: this.state.account.userEmail,
      password: this.state.account.userPassword
    });
    let user = await User.find(`.find({email: '${newUser.email}'})`);
    if (user.length === 0) {
      newUser.save();
      console.log("User saved");
      alert("user saved");
      return;
    } else {
      console.log("User exists");
      alert("user exists");
      return;
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="header">Registrera</div>
        <FormGroup>
          <Label for="userFirstName">Förnamn</Label>
          <Input
            value={this.state.account.userFirstName}
            onChange={this.handleChange}
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder="Förnamn"
            className="formControl"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userLastName">Efternamn</Label>
          <Input
            value={this.state.account.userLastName}
            onChange={this.handleChange}
            type="text"
            name="userLastName"
            id="userLastName"
            placeholder="Efternamn"
            className="formControl"
          />
        </FormGroup>
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
    );
  }
}

export default RegisterPage;
