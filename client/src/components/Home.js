import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Background, Parallax } from 'react-parallax';
import Gmaps from './Gmaps';
import FaClock from 'react-icons/lib/fa/clock-o';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import bgimg from '../photos/ebenezerrockedited.jpg';

const Home = () => {
  return (
    <div className="home-container">

      <Parallax strength={500}>
        <Background>
          <img className="h-bgimage" src={bgimg} alt="bgimg"/>
        </Background>
        <div className="h-cont">
          <div className="h-intro-txt">
            Then Samuel took a stone and set it up between Mizpah and
            Shen. He named it Ebenezer, saying, “Thus far the Lord has
            helped us.”<br/>1 Samuel 7:12 NIV
          </div>
        </div>
      </Parallax>

      <div className="h-subintro-container">
        <h3 className="h-header">Friends and Family Devoted to Christ!</h3><br/>
        <p className="h-text">
          Ebenezer Mission Church is a missional church.
          We believe in Jesus Christ as our Lord and savior! We believe that fellowship, service, and worship are vital for spiritual growth. Therefore we strive to get together as much as possible to learn and grow through the Bible which is the inspired word of God given to man and is useful for teaching, rebuking, correcting and training in righteousness.
        </p>
      </div>

      <Container className="h-tri-container">
        <Row>
          <div className="h-tri-colA">
            <Col>
              <h3 className="h-tri-header"><span className="h-section-icon"><FaClock/></span></h3>
              <div className="h-tri-content">
                <h2 className="h-dir-emc">Sunday</h2>
                <p className="h-dir-emc">
                  English 12:30 PM<br/>
                  Chinese 1:00 PM<br/>
                  Korean 10:45 AM
                </p>
              </div>
            </Col>
          </div>
          <div className="h-vr-col">
            <Col>
              <div className="h-vr" />
            </Col>
          </div>
          <div className="h-tri-colB">
            <Col>
              <h3 className="h-tri-header"><span className="h-section-icon"><FaMapMarker/></span></h3>
              <div className="h-tri-content">
                <h2 className="h-dir-emc">EMC</h2>
                <p className="h-dir-emc">
                  22016 Union Tpke,<br/> Oakland Gardens,<br/> NY 11364
                </p>
              </div>
            </Col>
          </div>
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
      <div className="h-space" />
    </div>
  )

}

export default Home
