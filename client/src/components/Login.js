import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaLock from 'react-icons/lib/fa/lock';

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
      <div className="la">
        <div className="lb">
          <div className="lc">
            <div className="ld">
              <p className="lp">"So we, though many, </p>
              <p className="lp">are one body in Christ"</p>
              <p className="lp">Romans 12:5 ESV</p>
            </div>
            <Form>
              <FormGroup>
                <div className="le">
                  <div className="lm"></div>
                  <Input className="ll" onChange={this.onChange} type="username" name="username" placeholder="Username" required/>
                  <span className="lf"><FaUser /></span>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="lg">
                  <div className="ln"></div>
                  <Input className="lo" onChange={this.onChange} type="password" name="password" placeholder="Password" required/>
                  <span className="lh"><FaLock /></span>
                </div>
              </FormGroup>
              <Button onClick={this.onSubmit} color="info"><div className="li">Login</div></Button>
            </Form>
            <p className="lj">Or <a href="/signup" className="lq">sign up</a></p>
          </div>
        </div>

        <div className="lk">
          <p>Here at EMC, we value membership and relationships very highly.</p>
          <p>If you would like to be a part of our family please feel free to sign-up!</p>
        </div>

      </div>
    )
  }
}

export default Login
