class NavBar extends Component {

  constructor() {
    super();
    this.addEvents({
      'click .logga-ut': 'userLogout',
      'click .navbar-toggler': 'navBarToggle',
      // 'click .navbar-close': 'navBarClose'
    });

    //  $('body').on('click',this.navBarClose.bind(this));
    
  //  this.userIsLoggedIn = false; // Remove this and use Store.loggedIn instead
    Store.navbar = this;
    this.showNav = true;
    this.socialItems = new SocialItems();
  }
  
  get navItems(){
    let items =  [
      new NavItem('Start', '/'),
      new NavItem('Aktuella visningar', '/show-program'),
      new NavItem('Våra Salonger', '/salongs-info'),
      new NavItem('Om oss', '/about-us')
      // new NavItem('Login', '/login')
    ];

    if(Store.loggedIn){
      items.push(
        new NavItem('Mina bokningar', '/mina-bokningar')
      );
    }

    return items;
  }


  userLogout(){
    App.loginPage.userLogout();
    this.render();
  }
  async navBarToggle(e){
    e.stopPropagation();
    this.showNav = !this.showNav;
    this.render();
  }
  // navBarClose(){
  //   this.showNav = false;
  //   this.render();
  // }

}





