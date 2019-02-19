class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.currentUser = "";
    this.currentLogin = "";
    this.currentUserInfo = "";
    this.showModal = false;
    this.hideLogin = false;
    this.showError = false;
    this.showErrorPassword = false;
    this.showYouAreLoggedIn = false;
    this.addRoute('/login', 'Login');
    this.addEvents({
      'submit form': 'userLogin',
      'click .relocate': 'relocate',
      'click .logout': 'userLogout'
    });

  }


  async userLogin(e) {

    e.preventDefault(); // prevent submitting a form from reloading a page

    let newLogin = new Login(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    let user = await User.find(`.find({email: '${newLogin.email}'})`);
    this.currentUserInfo = user[0];
    //console.log(this.currentUserInfo);
    //console.log(user);



    let result = await newLogin.save();
    console.log(result.loggedIn);

    console.log(result, "rsult");
    let test = await Login.find();
    console.log(test);
    if (result.error && result.error == "The password does not match!") {
      console.log("errorrrr");
      this.hideLogin = true;
      this.showErrorPassword = true;
      //     $('.login-form').empty();
      //    $('.login-form').append(`
      //    <div>
      //   <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
      //      <div class="modal-dialog" role="document">
      //        <div class="modal-content">
      //          <div class="modal-header">
      //            <h5 class="modal-title">Password doesnt match</h5>
      //          </div>
      //          <div class="modal-body">
      //            <p>Please register</p>
      //          </div>
      //          <div class="modal-footer">
      //           <a href="/login">Stäng</a>
      //          </div>
      //        </div>
      //      </div>
      //    </div>
      //  </div>
      //  `)     
    }
    else if (result.error && result.error === "No such user!") {
      console.log("errorrrr");
      $('.login-form').empty();
      $('.login-form').append(`
      <div>
     <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">No such user</h5>
            </div>
            <div class="modal-body">
              <p>Please register</p>
            </div>
            <div class="modal-footer">
             <a href="/register">Stäng</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `)
    }
    // else if (user.length === 0) {
    //   this.showLogin = false;
    //   this.showError = true;
    //   console.log("error: 'No such user!'");

    //   //   $('.login-form').empty();
    //   //   $('.login-form').append(`
    //   //   <div>
    //   //  <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
    //   //     <div class="modal-dialog" role="document">
    //   //       <div class="modal-content">
    //   //         <div class="modal-header">
    //   //           <h5 class="modal-title">No such user!</h5>
    //   //         </div>
    //   //         <div class="modal-body">
    //   //           <p>Please register</p>
    //   //         </div>
    //   //         <div class="modal-footer">
    //   //          <a href="/register">Stäng</a>
    //   //         </div>
    //   //       </div>
    //   //     </div>
    //   //   </div>
    //   // </div>
    //   // `)
    else if (result.loggedIn === true) {
      Store.loggedIn = true;
      Store.userIsLoggedIn = true;
      console.log(Store.loggedIn, "store");
      this.showLogin = false;
      this.showYouAreLoggedIn = true;
      console.log("Successfully logged in");

      Store.currentUser = user[0].firstName;
      console.log("finallyyyyy", Store.currentUser);
      //   newLogin.save();
      this.currentUser = newLogin;


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
      // `)


      Store.navbar.render();
      this.render();
      console.log("RERENDERING!");
      console.log(this.currentUser);
    }
  }


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



  //navbar
  // relocate() {
  //   Store.navbar.userIsLoggedIn = true;
  //   Store.navbar.render();
  //   this.render();
  // }

  async userLogout() {
    let toDeleteUser = await Login.find();
    this.currentLogin = await Login.find();
    console.log(toDeleteUser, "to be deleted");
    console.log(this.currentLogin, "current");
    await toDeleteUser.delete();
    //   await this.currentUser.delete();
    Store.loggedIn = false;
    Store.userIsLoggedIn = false;
    Store.navbar.userIsLoggedIn = false;

    Store.navbar.render();

    this.render();
  }


  // validate(){
  //   bghgg
  // }


}
