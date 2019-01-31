class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Boka Visning', '/book-ticket'),
      new NavItem('About', '/about')
    ];
  }

}