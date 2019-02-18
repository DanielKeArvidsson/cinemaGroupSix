class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Aktuella visningar', '/show-program'),
      new NavItem('Våra Salonger', '/salongs-info'),
      new NavItem('Om oss', '/about-us'),
     
      // new NavItem('Login', '/login')
    ];
    this.addEvents({
      'click .logga-ut': 'userLogout',
    });
    this.userIsLoggedIn = false;
    Store.navbar = this;
    this.socialItems = new SocialItems();
  }
  


  userLogout(){
    App.loginPage.userLogout();
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