class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.redirect = false;
    this.showForm = true;
    this.showIsRegistered = false;
    this.addRoute('/register', 'Register');
    this.addEvents({
      //'click .registerUser': 'registerUser',
      'submit form': 'registerUser'
    });

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
    let user = await User.find(`.find({email: '${newUser.email}'})`);
    if (user.length === 0) {
      
      console.log("Success");
      newUser.save();
      this.showForm = false;
      this.showIsRegistered = true;
      this.showError = false;
      console.log(newUser);
      this.render();
  //     $('.register-form').empty();
  //   $('.register-form').append(`
  //   <div>
  //  <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
  //     <div class="modal-dialog" role="document">
  //       <div class="modal-content">
  //         <div class="modal-body">
  //         <p>Hej ${newUser.firstName}!</p>
  //           <p>Din registrering är slutförd.</p>
  //         </div>
  //         <div class="modal-footer">
  //          <a href="/login">Stäng</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   `)

    } else {
      console.log("User already exists");
      // this.redirect= true;
      this.showForm = false;
      this.showError = true;

  //   $('.register-form').empty();
  //   $('.register-form').append(`
  //   <div>
  //  <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
  //     <div class="modal-dialog" role="document">
  //       <div class="modal-content">
  //         <div class="modal-body">
       
  //           <p>User already exists!.</p>
  //         </div>
  //         <div class="modal-footer">
  //          <a href="/login">Stäng</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   `)
  }
  this.render();
}

}
