import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import validateInput from './Validator'

import { Alert, Button, Form, InputGroup, Input, FormFeedback, InputGroupAddon } from 'reactstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaLock from 'react-icons/lib/fa/lock';

class Login extends Component {
  state = {
    email: '',
    password: '',
    full_name: 'not required',
    phone: 'not required'
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) this.setState({ errors })
    return isValid
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ errors: '' })
    if (this.isValid()) this.props.loginUser(this.state)
  }

  render() {
    const { errors } = this.state
    if (this.props.auth && this.props.auth.success) {
      return <Redirect to="/members" />
    } else {
      return (
        <div className="login-signup-container">
        {this.props.auth && !this.props.auth.success ?
          <Alert color="danger">
            {this.props.auth.msg}
         </Alert> : <div></div>}
          <h1>Login!</h1>
          <Form className="login-signup-form">
            <div className="login-signup-form-header">
              <p>
                "So we, though many,
                are one body in Christ"
                Romans 12:5 ESV
              </p>
            </div>

            <InputGroup>
              <InputGroupAddon><FaEnvelope /></InputGroupAddon>
              <Input
                onChange={this.onChange}
                type="email" name="email"
                placeholder="Email"
                valid={this.props.register ? this.props.register.available :
                  errors ? this.state.errors.email_valid : null}
              />
              <FormFeedback>
                &nbsp;{this.props.register ? 'Email' :
                  (this.state.email === '') ? 'Email is required' :
                  this.state.errors ? this.state.errors.email : null}
              </FormFeedback>
            </InputGroup>

            <br />

            <InputGroup>
              <InputGroupAddon><FaLock /></InputGroupAddon>
              <Input
                onChange={this.onChange}
                type="password"
                name="password"
                placeholder="password"
                valid={errors ? this.state.errors.password_valid : null}
                />
                <FormFeedback>&nbsp;{errors ? this.state.errors.password : null}</FormFeedback>
            </InputGroup>

            <br />

            <Button
              onClick={this.onSubmit}
              color="info"
            >Login
            </Button>
            &nbsp;Or
            <Link className="your-class-name" to='/signup'> Register </Link>
          </Form>
          <p>Here at EMC, we value membership and relationships very highly. <br/>
          If you would like to be a part of our family please feel free to sign-up!</p>
        </div>

      )
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Login)
