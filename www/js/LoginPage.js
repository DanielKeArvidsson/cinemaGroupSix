class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.addRoute('/login', 'Login');
    this.addEvents({
      'click .user-login': 'userLogin',
      'submit form': 'preventPageReload'
    });

  }

  preventPageReload(e){
    e.preventDefault() // prevent submitting a form from reloading a page
  }


  // saveLogin() {
  //   let email = this.baseEl.find('#user-email').val();
  //   let password = this.baseEl.find('#user-password').val();;
  //   Login.loginUser(email, password);
  
  // }

  userLogin() {
    let newLogin = new Login(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    newLogin.save();
    $(location).attr('href', '/'); //getting back to home page
    // Store.navbar.userIsLoggedIn = true;
    // Store.navbar.render();
    // this.render();
  }

 

}
