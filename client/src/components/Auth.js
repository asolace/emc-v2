import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

import NotMember from './Members/NotMember'

export default function (ComposedComponent) {
  class Authentication extends Component {
    render() {
      if (this.props.auth && this.props.auth.user && this.props.auth.user.isMember === true){
        return <ComposedComponent {...this.props} />
      } else if (this.props.auth && this.props.auth.user && this.props.auth.user.isMember === false) {
        return <NotMember />
      } else {
        return <Redirect to="login"/>
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth }
  }

  return connect(mapStateToProps, actions)(Authentication);
}
