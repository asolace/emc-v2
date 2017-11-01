import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';
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

        <div className="f-intro-container">
          <p className="f-intro-text">
          "They devoted themselves to the apostles' teaching and to
          fellowship, to the breaking of bread and to prayer" Acts 2:42 NIV
          </p>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="f-fg-container">
          <h1 className="f-fg-header">Friends Gathering</h1>
          <Row className="f-row">
            <Col>
              <div className="f-description">
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
            </Col>
            <Col>
              <div className="f-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Thurs. & Fri. 7pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Pastor Jaes Humble Abode & Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Pastor Pio</td>
                </tr>
              </div>
            </Col>
          </Row>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="f-pm-container">
          <h1 className="f-pm-header">Prayer Meeting</h1>
          <Row className="f-row">
            <Col>
              <div className="f-description">
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
            </Col>
            <Col>
              <div className="f-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Saturday 7pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Lulu Lim</td>
                </tr>
              </div>
            </Col>
          </Row>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="f-tc-container">
          <h1 className="f-tc-header">Tee Class</h1>
          <Row className="f-row">
            <Col>
              <div className="f-description">
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
            </Col>
            <Col>
              <div className="f-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Sunday 11am</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Jason Park</td>
                </tr>
              </div>
            </Col>
          </Row>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="f-sg-container">
          <h1 className="f-sg-header">Saturday Group</h1>
          <Row className="f-row">
            <Col>
              <div className="f-description">
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
            </Col>
            <Col>
              <div className="f-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Saturday 5:30pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Dr. Soo-Il Lee</td>
                </tr>
              </div>
            </Col>
          </Row>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="f-pg-container">
          <h1 className="f-pg-header">Parent Group</h1>
          <Row className="f-row">
            <Col>
              <div className="f-description">
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
            </Col>
            <Col>
              <div className="f-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Dr. Soo-Il Lee</td>
                </tr>
              </div>
            </Col>
          </Row>
        </div>


















        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="fellowship-intro-container">
          <p className="fellowship-intro-text">
          "They devoted themselves to the apostles' teaching and to
          fellowship, to the breaking of bread and to prayer" Acts 2:42 NIV
          </p>
        </div>
        <div className="fellowship-container">
          <Row className="fellowship-row">
            <h1 className="fellowship-header">Friends Gathering </h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <UncontrolledCarousel autoPlay={false} items={carouselItems1} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Thurs. & Fri. 7pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Pastor Jaes Humble Abode & Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Pastor Pio</td>
                </tr>
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
            <h1 className="fellowship-header">Tee Class </h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <UncontrolledCarousel autoPlay={false} items={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Sunday 11am</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Jason Park</td>
                </tr>
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
            <h1 className="fellowship-header">Prayer Meeting </h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <UncontrolledCarousel autoPlay={false} items={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Saturday 7pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Lulu Lim</td>
                </tr>
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
            <h1 className="fellowship-header">Saturday Group</h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <UncontrolledCarousel autoPlay={false} items={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Saturday 5:30pm</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Dr. Soo-Il Lee</td>
                </tr>
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
            <h1 className="fellowship-header">Parent Group</h1>
          </Row>
          <Row className="fellowship-row">
            <Col>
              <div className="fellowship-slider">
                <UncontrolledCarousel autoPlay={false} items={carouselItems2} />
              </div>
            </Col>
            <Col>
              <div className="fellowship-info">
                <tr>
                  <td><b>Time: </b></td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td><b>Location: </b></td>
                  <td>Church</td>
                </tr>
                <tr>
                  <td><b>Contact: </b></td>
                  <td>Dr. Soo-Il Lee</td>
                </tr>
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
