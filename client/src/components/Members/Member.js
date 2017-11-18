import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import { Button } from 'reactstrap'

class Member extends Component {
  render() {
    return(
      <div>
        <h1>Welcome Member</h1>
        <Link to="/directory">Directory</Link>
        <Button onClick={this.props.logoutUser}>Fancy Logout Button</Button>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Member)
