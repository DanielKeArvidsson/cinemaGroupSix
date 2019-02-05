class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.bookTicket = new BookTicket();
    this.salong = new Salong();
    this.loginPage = new LoginPage();
    App.loginPage = this.loginPage;
    this.registerPage = new RegisterPage();
    this.missingPage = new MissingPage();    
  }

}