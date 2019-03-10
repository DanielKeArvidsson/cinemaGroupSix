class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.redirect = false;
    this.showForm = true;
    this.showIsRegistered = false;
    this.showError = false;
    this.addRoute('/register', 'Register');
    this.addEvents({
      //'click .registerUser': 'registerUser',
      'submit form': 'registerUser'
    });

  }

  mount() {
    this.showIsRegistered = false;
    this.showError = false;
    this.showForm = true;
    this.render();
  }

  async registerUser(e) {
    e.preventDefault();

    let newUser = new User(
      {
        firstName: this.baseEl.find('#user-firstName').val(),
        lastName: this.baseEl.find('#user-lastName').val(),
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )

    //if (!this.loginHandler.emailValidator(userData.email)
    let user = await User.find(`.find({email: '${newUser.email}'})`);
    if (user.length === 0) {
      newUser.save();
      this.showForm = false;
      this.showIsRegistered = true;
      this.showError = false;
      this.render();
      return;
    } else {
  
      this.showForm = false;
      this.showError = true;
      this.render();
      return;
    }
    this.render();
  }

}
