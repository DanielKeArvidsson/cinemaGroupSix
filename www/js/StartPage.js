class StartPage extends Component {

  constructor() {
    super();
    this.addRoute('/', 'Start');
    this.addEvents({
      'click .user-submit': 'userSubmit'
    });
  }

  userSubmit(){
    let newUser = new User(
      {
      name: this.baseEl.find('#user-name').val(),
      password: this.baseEl.find('#user-password').val()        
      }
    )
    newUser.save();
  }


}