import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';

import carousel4 from '../photos/carousel/carousel-4.jpg'
import carousel5 from '../photos/carousel/carousel-5.jpg'
import carousel6 from '../photos/carousel/carousel-6.jpg'
import carousel7 from '../photos/carousel/carousel-7.jpg'

const carouselItems1 = [
  {
    src: carousel4,
    altText: '',
    caption: ''
  },
  {
    src: carousel5,
    altText: '',
    caption: ''
  }
]

const carouselItems2 = [
  {
    src: carousel6,
    altText: '',
    caption: ''
  },
  {
    src: carousel7,
    altText: '',
    caption: ''
  }
]

class Fellowship extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col>
              <div className="testA">
                <UncontrolledCarousel autoPlay={false} items={carouselItems1} />
              </div>
            </Col>
            <Col>
              <div className="testB">
                <p><b>Time: </b> 8:00pm </p>
                <p><b>Location: </b> Multiple Locations </p>
                <p><b>Contact: </b> Pastor Jae </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="testC">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin gravida aliquam semper. In laoreet urna lacus, nec varius
              orci mattis sed. Integer porta non tortor et placerat. Nam mollis
              eget lectus sed blandit. Morbi dolor lorem, rutrum in tellus ut,
              congue vehicula ex. Aenean id lorem et diam tempor convallis ac ut
              nunc. Donec eu augue eu enim laoreet vehicula sed ac ex.
              Morbi facilisis lorem ante, sed commodo nisi lobortis vitae. Vivamus
              sit amet tincidunt nibh. Nullam et nisl felis.
              </p>
            </div>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <div className="testA">
                <UncontrolledCarousel autoPlay={false} items={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="testB">
                <p><b>Time: </b> 8:00pm </p>
                <p><b>Location: </b> Multiple Locations </p>
                <p><b>Contact: </b> Pastor Jae </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="testC">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin gravida aliquam semper. In laoreet urna lacus, nec varius
              orci mattis sed. Integer porta non tortor et placerat. Nam mollis
              eget lectus sed blandit. Morbi dolor lorem, rutrum in tellus ut,
              congue vehicula ex. Aenean id lorem et diam tempor convallis ac ut
              nunc. Donec eu augue eu enim laoreet vehicula sed ac ex.
              Morbi facilisis lorem ante, sed commodo nisi lobortis vitae. Vivamus
              sit amet tincidunt nibh. Nullam et nisl felis.
              </p>
            </div>
          </Row>
        </div>
      </div>
    )
  }
}

export default Fellowship
