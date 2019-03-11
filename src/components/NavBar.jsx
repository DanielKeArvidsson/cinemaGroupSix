import React, { Component } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
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
              <Collapse className="navbarLinks" isOpen={!this.state.collapsed} navbar>
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
                  <NavItem>
                    <NavLink
                      to="/logga-in"
                      onClick={this.closeNavbar}
                      className="nav-link"
                    >
                      Logga in
                    </NavLink>
                  </NavItem>
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
