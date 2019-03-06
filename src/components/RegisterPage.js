import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import REST from "../REST";
class Login extends REST {};

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (   
      <Form>
        <div className="header">
          Registrera
        </div>
        <FormGroup>
          <Label for="userFirstName">Förnamn</Label>
          <Input
            type="text"
            name="firstName"
            id="userFirstName"
            placeholder="Förnamn"
            className="formControl"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userLastName">Efternamn</Label>
          <Input
            type="text"
            name="lastName"
            id="userLastName"
            placeholder="Efternamn"
            className="formControl"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userEmail">E-post</Label>
          <Input
            type="email"
            name="email"
            id="userEmail"
            placeholder="E-post"
            className="formControl"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Lösenord</Label>
          <Input
            type="password"
            name="password"
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
