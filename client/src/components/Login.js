import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="l-page-background">
        <Form>
          <div className="l-container">
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
              <Button>Submit</Button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default Login
