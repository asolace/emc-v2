import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Directory extends Component {
  render() {

    return (
      <div>Div component</div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Directory)
