import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap'
import { NavLink, Link} from 'react-router-dom'


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
    collapsed: true
    };
}

toggleNavbar = () => {
    this.setState({
    collapsed: !this.state.collapsed
    });
}

closeNavbar = () => {
    if (!this.state.collapsed === true) {
    this.toggleNavbar();
    }
}

  render() {
    return (
      <React.Fragment>
      <Container>
        <Navbar expand="lg" dark >
          <Link to='/' className="navbar-brand">FilmVisarna AB</Link>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to='/' onClick={this.closeNavbar} className="nav-link">Start</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/program' onClick={this.closeNavbar} className="nav-link">Aktuella Visningar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/salong' onClick={this.closeNavbar} className="nav-link">Våra Salonger</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/aboutUs' onClick={this.closeNavbar} className="nav-link">Om Oss</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login' onClick={this.closeNavbar} className="nav-link">Logga in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      </React.Fragment>
    )
  }
}
export default NavBar;