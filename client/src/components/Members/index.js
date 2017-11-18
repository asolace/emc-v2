import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Member from './Member'

class Members extends Component {
  render() {
    if (this.props.auth && this.props.auth.success) {
      switch (this.props.auth.user.isMember) {
        case 'false':
          sessionStorage.removeItem('jwt')
          sessionStorage.removeItem('user')
          return <h1>You are not a member yet please contact whom ever</h1>
        case 'true':
        case 'admin':
          return <Member />
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
