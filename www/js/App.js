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
    this.checkIfLoggedIn();
  }

  async loadAllMovies() {
    this.movies = await Movie.find();
    new Router(this.pageContent);
    this.pageContent.movies = this.movies;
    this.pageContent.render(); 
  }


  //global variable to check if user is logged in
  //use this variable elsewhere to maniplulate if someone is logged in
  async checkIfLoggedIn(){
    Store.loggedIn = await Login.find();
    if(Store.loggedIn.error){ Store.loggedIn = false; }
    console.log("Store.loggedin",Store.loggedIn);
    this.navBar.render();
  }

}
