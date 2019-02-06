class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.currentUser = "";
    this.addRoute('/login', 'Login');
    this.addEvents({
      'click .user-login': 'userLogin',
      'submit form': 'preventPageReload',
      'click .relocate': 'relocate'
    });

  }

  preventPageReload(e) {
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

  //  await Program.find(`.findOne({ _id: '${programId}'}).populate({
    this.currentUser = newLogin;
    console.log(this.currentUser);

    let userFirstName = User.find(`.findOne({ email: '${this.currentUser.email}'}).select('firstName').exec()`);
   
   console.log(userFirstName);
    $('.login-form').empty();
    $('.login-form').append(`
    <div>
   <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Hej ${this.currentUser.email}!</h5>
          </div>
          <div class="modal-body">
            <p>Du är nu inloggad!</p>
          </div>
          <div class="modal-footer">
           <a class="relocate" href="/">Stäng</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `)
  }

  relocate(){
    Store.navbar.userIsLoggedIn = true;
      Store.navbar.render();
      this.render();
  }

  userLogout(){
    this.currentUser.delete();
    Store.navbar.userIsLoggedIn = false;
    Store.navbar.render();
    this.render();
  }
 


}
