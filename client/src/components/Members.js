import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Button } from 'reactstrap'

class Members extends Component {
  render() {
    if (this.props.auth && this.props.auth.success) {
      switch (this.props.auth.user.isMember) {
        case 'false':
          return <h1>You are not a member yet please contact whom ever</h1>
        case 'true':
          return (
            <div>
              <h1>Welcome Member</h1>
              <Button onClick={this.props.logoutUser}>Fancy Logout Button</Button>
            </div>
          )
        case 'admin':
          return (
            <div>
              <h1>Welcome Admin</h1>
              <Button onClick={this.props.logoutUser}>Fancy Logout Button</Button>
            </div>
          )
        default:
          return <Redirect to="/" />
      }
    } else {
      return <Redirect to="/login" />
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Members)
