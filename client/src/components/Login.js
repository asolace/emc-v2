import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import cross from '../photos/logincross.png'

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
      <div className="l-page-background">
        <div className="l-cross">
          <img className="l-cross" src={cross}></img>
        </div>
        <p className="l-text">"So we, though many, are one body in Christ"</p>
        <p className="l-text">Romans 12:5 ESV</p>

        <div className="l-row">
        <Row className="l-row">
          <div className="l-col-login">
            <Col>
              <div className="l-container">
                <Form>
                  <FormGroup>
                    <div className="l-inputA">
                      <Input onChange={this.onChange} type="username" name="username" placeholder="Username" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="l-inputB">
                      <Input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                    </div>
                  </FormGroup>
                </Form>
                <Button onClick={this.onSubmit} color="info">Login</Button>
              </div>
            </Col>
          </div>

          <div className="l-col-vr">
            <Col>
              <div className="l-vr"></div>
            </Col>
          </div>

          <div className="l-col-signup">
            <Col>
              <div className="l-container">
                <Form>
                  <FormGroup>
                    <div className="l-inputA">
                      <Input onChange={this.onChange} type="username" name="username" placeholder="example@domain.com" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="l-inputB">
                      <Input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                    </div>
                  </FormGroup>
                </Form>
                <Button onClick={this.onSubmit} color="success">Sign-Up</Button>
              </div>
            </Col>
          </div>
        </Row>
        </div>

        <div>
          <p>Here at EMC, we value membership and relationships very highly.</p>
          <p>If you would like to be a part of our family please feel free to sign-up!</p>
        </div>
      </div>
    )
  }
}

export default Login
