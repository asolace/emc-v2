import React from 'react';
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Gmaps from './Gmaps'
import FaClock from 'react-icons/lib/fa/clock-o'
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import ScrollAnimation from 'react-animate-on-scroll';

import members from '../photos/people/IMG_0582.JPG'
import events from '../photos/people/IMG_0433.jpg'
import prayers from '../photos/people/IMG_0510.JPG'

import carousel1 from '../photos/carousel/carousel-1.jpg'
import carousel2 from '../photos/carousel/carousel-2.jpg'
import carousel3 from '../photos/carousel/carousel-3.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="h-container">
        <h1 className="h-intro-text">Then Samuel took a stone and set it up between Mizpah and
        Shen. He named it Ebenezer, saying, “Thus far the Lord has
        helped us.”</h1>
        <h1 className="h-intro-text">1 Samuel 7:12 NIV</h1>
      </div>
      <div className="container">
        <h3 className="h-header">Friends and Family Devoted to Christ!</h3><br/>
        <p className="h-text">
          Ebenezer Mission Church is a <b>missional</b> church.
          We believe in Jesus Christ as our Lord and savior! We believe that fellowship, service, and worship are vital for spiritual growth. Therefore we strive to get together as much as possible to learn and grow through the Bible which is the inspired word of God given to man and is useful for teaching, rebuking, correcting and training in righteousness.
        </p>
      </div>

      <Container className="h-tri-container">
        <Row>
          <Col>
            <h3 className="h-tri-header">Time <span className="section-icon"><FaClock/></span></h3>
            <div className="h-tri-content">
              <h2 className="h-dir-emc">Sunday</h2>
              <p className="h-dir-emc">
                English 12:30 PM<br/>
                Chinese 1:00 PM<br/>
                Korean 10:45 AM
              </p>
            </div>
          </Col>
          <Col>
            <h3 className="h-tri-header">Location <span className="section-icon"><FaMapMarker/></span></h3>
            <div className="h-tri-content">
              <h2 className="h-dir-emc">Ebenezer Mission</h2>
              <h2 className="h-dir-emc">Church</h2>
              <p className="h-dir-emc">
                22016 Union Tpke,<br/> Oakland Gardens, NY 11364
              </p>
            </div>
          </Col>
          <div className="h-map">
          <Col>
            <Gmaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYjYt7PpDffRruRe3nHn85J0vVdcx-V3g&v3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `300px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          </div>
        </Row>
      </Container>
    </div>
  )

}

export default Home
