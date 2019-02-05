class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.addRoute('/register', 'Register');
    this.addEvents({
      'click .registerUser': 'registerUser',
    });

  }


  registerUser() {
    let newUser = new User(
      {
        firstName: this.baseEl.find('#user-firstName').val(),
        lastName: this.baseEl.find('#user-lastName').val(),
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    newUser.save();
    console.log(newUser);
    $('.register-form').empty();
    $('.register-form').append(`
    <div>
   <div id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
          <p>Hej ${newUser.firstName}!</p>
            <p>Din registrering är slutförd.</p>
          </div>
          <div class="modal-footer">
           <a href="/login">Stäng</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `)
  }

}
