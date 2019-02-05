class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Aktuella visningar', '/show-program'),
      new NavItem('Om oss', '/about-us'),
      new NavItem('Logga in', '/login')
    ];
  }

}