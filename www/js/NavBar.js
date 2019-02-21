class NavBar extends Component {

  constructor() {
    super();
    this.addEvents({
      'click .logga-ut': 'userLogout'
    });

    //  this.userIsLoggedIn = false; // Remove this and use Store.loggedIn instead
    Store.navbar = this;

    this.socialItems = new SocialItems();
  }

  get navItems() {
    let items = [
      new NavItem('Start', '/'),
      new NavItem('Aktuella visningar', '/show-program'),
      new NavItem('Våra Salonger', '/salongs-info'),
      new NavItem('Om oss', '/about-us')
      // new NavItem('Login', '/login')
    ];

    if (Store.loggedIn) {
      items.push(
        new NavItem('Mina bokningar', '/mina-bokningar')
      );
    }

    return items;
  }


  userLogout() {
    App.loginPage.userLogout();
    this.render();
  }


}
// $(function() {
//   $(document).click(function (event) {
//     $('.collapse').collapse('hide');
//   });
// });



function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}