import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Table, Progress } from 'reactstrap';

class Directory extends Component {
  state = {
    directory: []
  }
  async componentDidMount() {
    let token = sessionStorage.getItem('jwt')
    let res = await axios.get('/user/directory',{headers: {"Authorization": token}})
    this.setState({ directory: res.data.mappedUsers })
  }

  renderRows() {
    return this.state.directory
      .sort((a, b) => {
        if (a.fullName < b.fullName) return -1
        if (a.fullName > b.fullName) return 1
        return 0
      })
      .map((obj, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i+1}</th>
          <td>{obj.fullName}</td>
          <td>{obj.email}</td>
          <td>{obj.phone}</td>
        </tr>
      )
    })
  }

  render() {
    if (this.state.directory.length === 0) {
      return <Progress animated value="100" />
    } else {
      return (
        <div className="directory-container">
          <h1>Member's Directory</h1>
          <div className="container">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </Table>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Directory)
