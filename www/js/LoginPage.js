class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.addRoute('/login', 'Login');
    this.addEvents({
      'click .user-login': 'userLogin',
      'click .register': 'showRegister',
      'click #registerUser': 'newUserLogin'
    });

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

  newUserLogin() {
    let newUser = new User(
      {
        email: this.baseEl.find('#user-email').val(),
        password: this.baseEl.find('#user-password').val()
      }
    )
    newUser.save();
    $('.login-form').empty();
  }

  showRegister() {
    $('.login-form').empty();
    $('.login-form').append(
      `
      <form class="register-form">
        <h3>Registrera ny användare</h3>
        <section class="login-wrapper">
        <div class="form-group">
        <label for="user-firstName">Förnamn</label>
        <input type="text" class="form-control" id="user-firstName" placeholder="Förnamn">
        </div>
        <div class="form-group">
        <label for="user-lastName">Efternamn</label>
        <input type="text" class="form-control" id="user-lastName" placeholder="Efternamn">
        </div>         
        <div class="form-group">
        <label for="user-email">E-postaddress</label>
        <input type="email" class="form-control" id="user-email" placeholder="E-postaddress">
        </div> 
        <div class="form-group">
        <label for="user-password">Lösenord</label>
        <input type="password" class="form-control" id="user-password" placeholder="Lösenord">
        </div>
        <button type="button" id="registerUser" class="btn btn-primary mt-4">Bekräfta</button>
        </form>
        `
    );
  
  }





}
