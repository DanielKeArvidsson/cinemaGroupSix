class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Boka biljett', '/book-ticket'),
      new NavItem('About', '/about'),
      new NavItem('Login', '/login')
    ];
  }

}