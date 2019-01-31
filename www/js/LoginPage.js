class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.addRoute('/login', 'Login');
    this.addEvents({
      'click .user-login': 'userLogin'
    });

  }
  

  userLogin() {
    let newUser = new User(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    newUser.save();
  }


}
