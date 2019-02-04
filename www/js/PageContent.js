class PageContent extends Component {

  constructor() {
    super();
    this.movies = []; // will be changed from App
    this.startPage = new StartPage();
    this.bookTicket = new BookTicket();
    this.salong = new Salong();
    this.loginPage = new LoginPage();
    this.missingPage = new MissingPage();
  }

}