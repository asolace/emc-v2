import React, { Component } from 'react';
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
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
        <Navbar className="header-navbar" color="black" light expand="md" fixed="top">
          <NavbarBrand>
            <Link to="/">
              <div className="emc-brand">
                <Row>
                  <div className="emc-subbrandA">
                    <Col>
                      <span className="emc-brand-blue">E</span>
                      <span className="emc-brand-blue">M</span>
                      <span className="emc-brand-blue">C</span>
                    </Col>
                  </div>
                  <div className="emc-subbrandB">
                    <Col>
                      <span className="emc-title-blue"> | EBENEZER </span>
                      <span className="emc-title-red">MISSION </span>
                      <span className="emc-title-blue">CHURCH </span>
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
