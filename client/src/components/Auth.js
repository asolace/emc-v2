import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      let token = sessionStorage.getItem('jwt')
      if (!token) this.props.history.push('/')
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(auth) {
    return { auth };
  }

  return connect(mapStateToProps)(Authentication);
}
