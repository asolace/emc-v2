import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InvalidLogin extends Component {
  render() {
    return(
        <div>
          <Link to="/login">
            <h1>INVALID LOGIN</h1>
          </Link>
        </div>
    )
  }
}

export default InvalidLogin
