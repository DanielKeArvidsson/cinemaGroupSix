import React, { Component } from "react";
import REST from "../REST";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import App from "../App";

class Login extends REST {
  async delete() {
    this._id = 1;
    return super.delete();
  }
  static get baseRoute() {
    return "login/";
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    NavBar.lastInstance = this;
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  closeNavbar = () => {
    if (!this.state.collapsed === true) {
      this.toggleNavbar();
    }
  };

  async userLogout() {
    let toDeleteUser = await Login.find();
    await toDeleteUser.delete();
    App.isLoggedin = false;
    NavBar.lastInstance.setState(state => NavBar.lastInstance);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <Navbar expand="lg" dark fixed="top">
              <Link to="/" className="navbar-brand">
                FilmVisarna AB
              </Link>
              <NavbarToggler onClick={this.toggleNavbar} />
              <Collapse
                className="navbarLinks"
                isOpen={!this.state.collapsed}
                navbar
              >
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink
                      exact
                      to="/start"
                      onClick={this.closeNavbar}
                      className="nav-link"
                    >
                      Start
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/visningar"
                      onClick={this.closeNavbar}
                      className="nav-link"
                    >
                      Aktuella Visningar
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/salongsinfo"
                      onClick={this.closeNavbar}
                      className="nav-link"
                    >
                      Våra Salonger
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/om-oss"
                      onClick={this.closeNavbar}
                      className="nav-link"
                    >
                      Om Oss
                    </NavLink>
                  </NavItem>
                  {App.isLoggedin ? (
                    <NavItem>
                      <NavLink
                        to="/mina-bokningar"
                        onClick={this.closeNavbar}
                        className="nav-link"
                      >
                        Mina bokningar
                      </NavLink>
                    </NavItem>
                  ) : (
                    ""
                  )}
                  {!App.isLoggedin ? (
                    <NavItem>
                      <NavLink
                        to="/login"
                        onClick={this.closeNavbar}
                        className="nav-link"
                      >
                        Logga in
                      </NavLink>
                    </NavItem>
                  ) : (
                    <NavItem>
                      <NavLink
                        to="/login"
                        onClick={this.closeNavbar}
                        onClick={this.userLogout}
                        className="nav-link"
                      >
                        Logga ut
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NavBar;
