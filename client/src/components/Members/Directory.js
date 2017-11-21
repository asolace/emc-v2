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
    const token = sessionStorage.getItem('jwt')

    let res = await axios.get('/user/directory', { headers: {"Authorization": token} })
    this.setState({ directory: res.data.mappedUsers })
  }

  async updateUser(data) {
    const updateRes = await axios.post('/user/update', data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    const res = await axios.get('/user/directory', { headers: {"Authorization": token} })
    this.setState({ directory: res.data.mappedUsers, updateRes })
  }

  checkEmail = email => email.includes('test.com') ? 'NA' : email

  updateUserStatus = event => {
    let userId = event.target.parentNode.id
    let type = event.target.id

    let value = event.target.innerHTML
    value = value === 'false' ? 'true' : 'false'
    event.target.innerHTML = value

    let data = { userId, type, value }
    this.updateUser(data)
  }

  updateUserInfo = event => {
    
  }

  renderAdminRows() {
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
            className={obj.isMember ? 'tmbg td-admin' : 'tmbr td-admin'}
            onClick={this.updateUserStatus}
          >
            {obj.isMember.toString()}
          </td>
        </tr>
      )
    })
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
          >
            {obj.isMember.toString()}
          </td>
        </tr>
      )
    })
  }

  render() {
    console.log('here');
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
                {this.props.auth && this.props.auth.user && this.props.auth.user.isAdmin ?
                  this.renderAdminRows() : this.renderRows()}
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
