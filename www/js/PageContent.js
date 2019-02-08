class PageContent extends Component {

  constructor() {
    super();
    this.movies = []; // will be changed from App
    this.startPage = new StartPage();
    this.showProgramPage = new ShowProgramPage();
    this.aboutPage = new AboutUs();
    this.bookTicketPage = new BookTicketPage();
    this.loginPage = new LoginPage();
    App.loginPage = this.loginPage;
    this.registerPage = new RegisterPage();
    this.missingPage = new MissingPage();    
    this.salong = new Salong();
  }

}