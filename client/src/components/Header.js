import React, { Component } from 'react';
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onDismiss = () => {
    console.log('hi');
  }

  render() {
    return (
      <div className="header">
        <Navbar color="black" light expand="md" fixed="top">
          <Link className="navbar-brand" to="/">
            <div className="emc-brand">
              <Row>
                <div className="emc-short-container">
                  <Col>
                    <span className="emc-logo">EMC</span>
                  </Col>
                </div>
                <div className="emc-long-container">
                  <Col>
                    <span className="emc-logo-long black"> | EBENEZER </span>
                    <span className="emc-logo-long red">MISSION </span>
                    <span className="emc-logo-long black">CHURCH </span>
                  </Col>
                </div>
              </Row>
            </div>
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
              <NavItem>
                <Link className="nav-link" to="/members">Members</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
