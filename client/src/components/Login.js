import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import cross from '../photos/logincross.png'

class Login extends Component {
  render() {
    return (
      <div className="l-page-background">
        <div className="l-cross">
          <img className="l-cross" src={cross}></img>
        </div>
        <p className="l-text">"So we, though many, are one body in Christ"</p>
        <p className="l-text">Romans 12:5 ESV</p>
        <div className="l-container">
          <Form>
            <FormGroup>
              <div className="l-email">
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="l-password">
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </div>
            </FormGroup>
            <div className="l-button">
              <Button>Login</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
