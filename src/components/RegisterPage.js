import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import REST from "../REST";
class User extends REST {}

class RegisterPage extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    account: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: ""
    },
    modalShow: false,
    message:""
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
      this.toggleModal();
      this.setState({message: 'Registrering är slutförd! Vänligen logga in.'});
      return;
    } else {
      this.toggleModal();
      this.setState({message: 'Användaren finns redan! Försök med en annan e-postadress.'});
      return;
    }
  }

  render() {
    return (
      <div className="register-container">
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
      {this.state.modalShow ? <Modal isOpen={this.state.modalShow} toggle={this.toggleModal} className= "buttons-div">
         <ModalHeader toggle={this.toggleModal}></ModalHeader>
         <ModalBody>
        <p>{this.state.message}</p>
         </ModalBody>
         <ModalFooter>
           <Button className="btn btn-secondary" onClick={this.toggleModal}>Stäng</Button>          
         </ModalFooter>
       </Modal> : ''}
      </div>
    );
  }
}

export default RegisterPage;
