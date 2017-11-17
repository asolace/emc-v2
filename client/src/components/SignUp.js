import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaLock from 'react-icons/lib/fa/lock';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    emailStatus: true,
    emailFeedback: ''
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
     fetch('/user/checkemail', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status.email.available) {
          fetch('/user/register', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
          })
            .then(res => res.json())
            .then(data => {
              // A successfull register, data will = {success: true, msg: "User registered"}
              // A failed register, data will = {success: false, msg: "Faield to register user"}

              // .push("/some route after login") otherwise do something else
              data.success ? this.props.history.push("/") : console.log(data);
            })
        } else {
          this.setState({
            emailStatus: data.status.email.available,
            emailFeedback: data.status.email.msg
          }, () => console.log(this.state))
        }
      })
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
                  <Input className="ll" onChange={this.onChange} type="email" name="email" valid={true} placeholder="Email" required/>
                  {/*<FormFeedback>{this.state.emailFeedback}</FormFeedback>*/}
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
              <Button onClick={this.onSubmit} color="info"><div className="li">SignUp</div></Button>
            </Form>
            <p className="lj">Or <a href="/login" className="lq">login</a></p>
          </div>
          <h1>Sign Up</h1>

        </div>

        <div className="lk">
          <p>Here at EMC, we value membership and relationships very highly.</p>
          <p>If you would like to be a part of our family please feel free to sign-up!</p>
        </div>

      </div>
    )
  }
}

export default SignUp
