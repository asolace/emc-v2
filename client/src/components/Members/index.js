import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Button } from 'reactstrap'

class Members extends Component {
  onLogout = () => {
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <h1>MEMBER DASHBOARD</h1>
        <Link to="/directory">Directories</Link><br />
        <Button onClick={this.onLogout}>Fancy Logout Button</Button>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Members)
