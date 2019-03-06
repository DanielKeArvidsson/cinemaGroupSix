import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import REST from "../REST";
class Login extends REST {}


export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (   
      <Form>
        <div className="header">
          Logga in
        </div>
        <FormGroup>
          <Label for="exampleEmail">E-post</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="E-post"
            className="formControl"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Lösenord</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
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
