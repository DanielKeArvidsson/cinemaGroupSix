class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.currentUser = "";
    this.currentUserInfo = "";
    this.currentUserName = "";
    this.currentUserName = "";
    this.currentUserEmail = "";
    this.hideLogin = false;
    this.showError = false;
    this.showErrorPassword = false;
    this.addRoute('/login', 'Login');
    this.addEvents({
      'submit form': 'userLogin',
      'click .relocate': 'relocate',
      'click .logout': 'userLogout',
      'click .resetLogin': 'mount'
    });

  }

  mount() {
    this.hideLogin = false;
    this.showError = false;
    this.showErrorPassword = false;
    this.render();
  }

  async userLogin(e) {

    e.preventDefault();

    let newLogin = new Login(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    let user = await User.find(`.find({email: '${newLogin.email}'})`);


    let result = await newLogin.save();
    let test = await Login.find();
    if (result.error && result.error == "The password does not match!") {
      this.hideLogin = true;
      this.showErrorPassword = true;
      this.render();
      return;
  
    }
    else if (result.error == "Not logged in!" || result.error == "No such user!" || test.error == "Not logged in!") {
      this.hideLogin = true;
      this.showError = true;
      return;
  
    }

    else if (result.loggedIn === true && test.error != "Not logged in!") {
      this.currentUserInfo = user[0];
      this.currentUserName = user[0].firstName;
      this.currentUserEmail = user[0].email;
      Store.currentUser = user[0].email;
      Store.loggedIn = true;
      Store.userIsLoggedIn = true;
      this.currentUser = newLogin;

    }
    Store.navbar.render();
    this.render();
  }


  



}
