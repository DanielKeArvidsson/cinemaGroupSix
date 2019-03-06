import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import REST from "../REST";

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
  state = {
    account: { userEmail: "", userPassword: "" }
  };

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
    let test = await Login.find();
    if (result.error && result.error === "The password does not match!") {
      alert("Lösenordet är felaktigt!");
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!" ||
      test.error === "Not logged in!"
    ) {
      alert("E-postadressen är ogiltig!");
    } else if (result.loggedIn === true && test.error !== "Not logged in!") {
      alert("Välkommen");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.userLogin();
  };

  render() {
    return (
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
    );
  }
}

export default LoginPage;
