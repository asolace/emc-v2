import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <Form >
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input onChange={this.onChange} type="username" name="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.onChange} type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Form>
          <Button onClick={this.onSubmit} color="info">Submit</Button>
        </div>

        <div>
          <p>We, at EMC value membership very highly. We believe that [more text here]</p>
          <p>If you like to be a member please contact [name here]</p>
        </div>
      </div>
    )
  }
}

export default Login
