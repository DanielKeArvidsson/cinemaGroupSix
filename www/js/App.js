class App extends Component {

  constructor() {
    super();
    this.navBar = new NavBar();
    this.pageContent = new PageContent();
    this.loginPage = new LoginPage();
    this.footer = new Footer();
    // only in the App class:
    $('body').html(this.render());
    this.loadAllMovies();
  }

  async loadAllMovies() {
    this.movies = await Movie.find();
    new Router(this.pageContent);
    this.pageContent.movies = this.movies;
    this.pageContent.render();
  }

}
