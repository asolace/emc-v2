import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="header">
        <Navbar color="faded" light expand="md" fixed="top">
          <Link to="/">
            <NavbarBrand>
              <span className="emc-brand-blue">E</span>
              <span className="emc-brand-blue">M</span>
              <span className="emc-brand-blue">C</span>
              <span className="emc-title-blue"> | EBENEZER </span>
              <span className="emc-title-red">MISSION </span>
              <span className="emc-title-blue">CHURCH</span>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">About Us</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/fellowship">Fellowship</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </NavItem>
            </Nav>
          </Collapse>
          <Link className="login-button" to="/login">
              <Button color="primary">Login</Button>
          </Link>
        </Navbar>
      </div>
    )
  }
}

export default Header
