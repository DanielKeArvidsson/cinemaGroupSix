class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Aktuella visningar', '/book-ticket'),
      new NavItem('About', '/about'),
      new NavItem('Login', '/login')
    ];
  }

}