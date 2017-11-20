import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Table, Progress } from 'reactstrap';

const token = sessionStorage.getItem('jwt')

class Directory extends Component {
  state = {
    directory: []
  }

  async componentDidMount() {
    let res = await axios.get('/user/directory', { headers: {"Authorization": token} })
    this.setState({ directory: res.data.mappedUsers })
  }

  checkEmail = email => email.includes('test.com') ? 'NA' : email

  updateStatus = event => {
    let userId = event.target.parentNode.id
    let type = event.target.id

    let value = event.target.innerHTML
    value = value === 'false' ? 'true' : 'false'
    event.target.innerHTML = value

    let data = { userId, type, value }
    this.props.updateUser(token, data)
  }

  updateUser = event => {

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
        <tr id={obj._id} key={obj._id}>
          <th scope="row">{i+1}</th>
          <td>{obj.fullName}</td>
          <td>{this.checkEmail(obj.email)}</td>
          <td>{obj.phone}</td>
          <td
            id="isMember"
            className={obj.isMember ? 'tmbg' : 'tmbr'} 
            onClick={this.updateStatus}
          >
            {obj.isMember.toString()}
          </td>
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
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </Table>
        </div>
      )
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Directory)
