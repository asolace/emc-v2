import React, { Component } from 'react';
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
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

  render() {
    return (
      <div className="header">
        <Navbar className="ea" color="black" light expand="md" fixed="top">
          <NavbarBrand>
            <Link to="/">
              <div className="eb">
                <Row>
                  <div className="ec">
                    <Col>
                      <span className="ee">EMC</span>
                    </Col>
                  </div>
                  <div className="ed">
                    <Col>
                      <span className="ef"> | EBENEZER </span>
                      <span className="eg">MISSION </span>
                      <span className="ef">CHURCH </span>
                    </Col>
                  </div>
                </Row>
              </div>
            </Link>
          </NavbarBrand>
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
                <Link className="nav-link" to="/login">Members</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
