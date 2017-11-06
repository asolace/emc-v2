import React from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';
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

const Fellowship = () => {
  return (
    <div className="f-page-background">

      <div className="f-intro-container f-container">
        <p className="f-intro-text">
        "They devoted themselves to the apostles' teaching and to
        fellowship, to the breaking of bread and to prayer" Acts 2:42 NIV
        </p>
      </div>


      <div className="f-fg-container f-container">
        <ScrollAnimation animateIn='fadeIn' duration={0.5} animateOnce={true}>
          <h1 className="f-fg-header">Friends Gathering</h1>
        </ScrollAnimation>
        <Row className="f-row">
          <Col>
            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
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
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <div className="f-info">
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>

      <div className="f-pm-container f-container">
        <ScrollAnimation animateIn='fadeIn' duration={0.5} animateOnce={true}>
          <h1 className="f-pm-header">Prayer Meeting</h1>
        </ScrollAnimation>
        <Row className="f-row">
          <Col>
            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
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
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <div className="f-info">
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>

      <div className="f-tc-container f-container">
        <ScrollAnimation animateIn='fadeIn' duration={0.5} animateOnce={true}>
          <h1 className="f-tc-header">TEE Class</h1>
        </ScrollAnimation>
        <Row className="f-row">
          <Col>
            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
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
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <div className="f-info">
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>

      <div className="f-sg-container f-container">
        <ScrollAnimation animateIn='fadeIn' duration={0.5} animateOnce={true}>
          <h1 className="f-sg-header">Saturday Group</h1>
        </ScrollAnimation>
        <Row className="f-row">
          <Col>
            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
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
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <div className="f-info">
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>

      <div className="f-pg-container f-container">
        <ScrollAnimation animateIn='fadeIn' duration={0.5} animateOnce={true}>
          <h1 className="f-pg-header">Parent Group</h1>
        </ScrollAnimation>
        <Row className="f-row">
          <Col>
            <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
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
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <div className="f-info">
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Fellowship
