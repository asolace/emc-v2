import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class ServiceTimes extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Service Times!</h1>
          <p className="lead">Sundays</p>
          <hr className="my-2" />
          <p className="service-hours">
            English Service 12:30 PM<br/>
            Chinese Service 1:00 PM<br/>
            Korean Service 10:45 AM
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default ServiceTimes
