class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.currentUser = "";
    this.showModal = false;
    this.message = "";
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

  async userLogin() {

    let newLogin = new Login(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    let user = await User.find(`.find({email: '${newLogin.email}'})`);

    // let passwordMatch = await bcrypt.compare(newLogin.password + passwordSalt , user.password );
    console.log(user);
    // console.log(passwordMatch);
    if (user.length === 0) {
      this.showModal = true;
      this.message = "User not found. Please register."; //show modal

      console.log(this.message);

      console.log("error: 'No such user!'");
      this.render();
    }
    //else if(passwordMatch === true){ ///how to get tha password check?
    //   console.log("Password does not match");
    // }
    else {
      this.showModal = true;
      console.log("Successfully logged in");
      console.log(User.loggedIn);
      this.message = "Successfully logged in";

    
      console.log(Login.loggedIn);
      this.render();
    }
    newLogin.save();
    this.currentUser = newLogin;
    console.log(this.currentUser);

    
//JQUERY
    // console.log(userFirstName);
    //   $('.login-form').empty();
    //   $('.login-form').append(`
    //   <div>
    //  <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
    //     <div class="modal-dialog" role="document">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title">Hej ${this.currentUser.email}!</h5>
    //         </div>
    //         <div class="modal-body">
    //           <p>Du är nu inloggad!</p>
    //         </div>
    //         <div class="modal-footer">
    //          <a class="relocate" href="/">Stäng</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   `)

  }

   
  //navbar
  relocate() {
    Store.navbar.userIsLoggedIn = true;
    Store.navbar.render();
    this.render();
  }

  userLogout() {
    this.currentUser.delete();
    Store.navbar.userIsLoggedIn = false;
    Store.navbar.render();
    this.render();
  }



}
