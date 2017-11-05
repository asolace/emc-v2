import React from 'react';
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Gmaps from './Gmaps'
import FaClock from 'react-icons/lib/fa/clock-o'
import FaMapMarker from 'react-icons/lib/fa/map-marker'

import members from '../photos/people/IMG_0582.JPG'
import events from '../photos/people/IMG_0433.jpg'
import prayers from '../photos/people/IMG_0510.JPG'

import carousel1 from '../photos/carousel/carousel-1.jpg'
import carousel2 from '../photos/carousel/carousel-2.jpg'
import carousel3 from '../photos/carousel/carousel-3.jpg'

const carouselItems = [
  {
    src: carousel1,
    altText: '',
    caption: ''
  },
  {
    src: carousel2,
    altText: '',
    caption: ''
  },
  {
    src: carousel3,
    altText: '',
    caption: ''
  }
]

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-slider">
        <Slider className="home-slider" carouselItems={carouselItems} />
      </div>
      <hr/>
      <div className="container">
        <h3 className="home-header">Friends and Family Devoted to Christ!</h3><br/>
        <p className="home-text">
          Ebenezer Mission Church is a missional church.
          We believe in Jesus Christ as our Lord and savior! We believe that fellowship, service, and worship are vital for spiritual growth. Therefore we strive to get together as much as possible to learn and grow through the Bible which is the inspired word of God given to man and is useful for teaching, rebuking, correcting and training in righteousness.
        </p>
      </div>
      <div className="container">
        <Row>
          <Col>
            <Link to="/members">
              <h5 className="name-me-section-home">MEMBERS</h5>
              <img className="name-me-img-home" src={members} alt="members"></img>
            </Link>
            <p className="name-me-text">
              Membership is important at EMC. Everyone are accountable to each other as we grow and be the light of the world.<br/><br/>
              As iron sharpens iron, so one person sharpens another. <strong>-Proverbs 27:17</strong>
            </p>
          </Col>
          <Col>
            <Link to="/events">
              <h5 className="name-me-section-home">EVENTS</h5>
              <img className="name-me-img-home" src={events} alt="events"></img>
            </Link>
            <p className="name-me-text">
              EMC hold many events to strengthen our relationship with each other and new members. Events also give us a chance to serve the community in hopes to bring the lost to Christ.
            </p>
          </Col>
          <Col>
            <Link to="/prayers">
              <h5 className="name-me-section-home">PRAYERS</h5>
              <img className="name-me-img-home" src={prayers} alt="photos"></img>
            </Link>
            <p className="name-me-text">
              Praying is one of the most important part of a Christians life. Finding the lost, saving souls, keeping the faith and much more are impossible task that no man can do but with God anything is possible.
            </p>
          </Col>
        </Row>
      </div>
      <Container className="section-container">
        <Row>
          <Col>
            <h3 className="home-tri-section-header">Time <span className="section-icon"><FaClock/></span></h3>
            <div className="home-tri-section-content">
              <h4 className="sunday-time">Sunday</h4>
              <p>
                English 12:30 PM<br/>
                Chinese 1:00 PM<br/>
                Korean 10:45 AM
              </p>
            </div>
          </Col>
          <Col>
            <h3 className="home-tri-section-header">Directions <span className="section-icon"><FaMapMarker/></span></h3>
            <div className="home-tri-section-content">
              <h4 className="direction-emc">Ebenezer Mission</h4>
              <h2 className="direction-emc">Church</h2>
              <p>
                22016 Union Tpke,<br/> Oakland Gardens, NY 11364
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Gmaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYjYt7PpDffRruRe3nHn85J0vVdcx-V3g&v3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Home
