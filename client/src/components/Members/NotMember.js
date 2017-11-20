import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Button } from 'reactstrap'

class NotMember extends Component {
  onLogout = () => {
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <h1>Sorry you're not a member yet... </h1>
        <Button onClick={this.onLogout}>Fancy Logout Button</Button>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(NotMember)
