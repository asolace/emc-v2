import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from './Slider';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <div className="fellowship-page-background">
        <div className="fellowship-intro-container">
          <p className="fellowship-intro-text">
          "They devoted themselves to the apostles' teaching and to
          fellowship, to the breaking of bread and to prayer" Acts 2:42 NIV
          </p>
        </div>
        <div className="fellowship-container">
          <Row className="fellowship-row">
            <h1 className="fellowship-header"> Friends Gathering </h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <Slider carouselItems={carouselItems1} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <p><b>Time: </b> 8:00pm </p>
                <p><b>Location: </b> Multiple Locations </p>
                <p><b>Contact: </b> Pastor Jae </p>
              </div>
            </Col>
          </Row>
          <Row className="fellowship-row">
            <div className="fellowship-description">
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
          <Row className="fellowship-row">
            <h1 className="fellowship-header"> Tee Class </h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <Slider carouselItems={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <p><b>Time: </b> 8:00pm </p>
                <p><b>Location: </b> Multiple Locations </p>
                <p><b>Contact: </b> Pastor Jae </p>
              </div>
            </Col>
          </Row>
          <Row className="fellowship-row">
            <div className="fellowship-description">
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
