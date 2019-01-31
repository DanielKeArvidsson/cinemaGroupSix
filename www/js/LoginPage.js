class LoginPage extends Component {

  constructor(props, login) {
    super(props);
    this.login = login;
    this.addRoute('/login', 'Login');
    this.addEvents({
      'click .user-login': 'userLogin',
      'click .user-login': 'savelogin'
    });

  }
  
  saveLogin() {
    Login.loginUser();
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
