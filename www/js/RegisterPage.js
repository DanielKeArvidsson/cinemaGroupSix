class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.addRoute('/register', 'Register');
    this.addEvents({
      'click #registerUser': 'registerUser',
    });

  }


  registerUser() {
    let newUser = new User(
      {
        firstName: this.baseEl.find('#user-firstName').val(), 
        lastName: this.baseEl.find('#user-lastName').val(),
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    newUser.save();
    console.log(newUser);
   
  }
}