class LoginPage extends Component {

  constructor(){
    super();
    this.addRoute('/login', 'Login');
    // this.addEvents({
    //   'click .user-submit': 'userSubmit'
    // });
  }


  // userSubmit() {
  //   let newUser = new User(
  //     {
  //       name: this.baseEl.find('#user-name').val(),
  //       email: this.baseEl.find('#user-email').val(),
  //       password: this.baseEl.find('#user-password').val()
  //     }
  //   )
  //   newUser.save();
  // }
}