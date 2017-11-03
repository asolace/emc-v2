import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import GroupPic from '../photos/people/IMG_0582.JPG';
import profilepic from '../photos/tempprofilepic.jpg';

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-mission-container">
        <h1 className="about-mission-header">Our Mission</h1>
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <p className="about-mission-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec nec dui et enim commodo facilisis id in magna.
          Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
          Aenean et diam egestas, vestibulum orci sodales, tristique odio.
          Aliquam quis varius quam, ultrices euismod ipsum.
          Integer gravida iaculis mauris ac tristique.
          </p>
        </ScrollAnimation>
      </div>

      <br /><br /><br /><br />
      <hr />

      <h1 className="about-leader-header">Our Leaders</h1>
      <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
        <div className="about-leader-container">
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={profilepic} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Pastor Jae Lee</h2>
              <p className="about-leader-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec dui et enim commodo facilisis id in magna.
                Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
                Aenean et diam egestas, vestibulum orci sodales, tristique odio.
                Aliquam quis varius quam, ultrices euismod ipsum.
                Integer gravida iaculis mauris ac tristique.</p>
            </Col>
          </Row>
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={profilepic} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Pastor Pio Lee</h2>
              <p className="about-leader-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec dui et enim commodo facilisis id in magna.
                Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
                Aenean et diam egestas, vestibulum orci sodales, tristique odio.
                Aliquam quis varius quam, ultrices euismod ipsum.
                Integer gravida iaculis mauris ac tristique.</p>
            </Col>
          </Row>
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={profilepic} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Pastor Enrique Piñero</h2>
              <p className="about-leader-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec dui et enim commodo facilisis id in magna.
                Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
                Aenean et diam egestas, vestibulum orci sodales, tristique odio.
                Aliquam quis varius quam, ultrices euismod ipsum.
                Integer gravida iaculis mauris ac tristique.</p>
            </Col>
          </Row>
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={profilepic} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Dr. Soo-Il Lee</h2>
              <p className="about-leader-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec nec dui et enim commodo facilisis id in magna.
                Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
                Aenean et diam egestas, vestibulum orci sodales, tristique odio.
                Aliquam quis varius quam, ultrices euismod ipsum.
                Integer gravida iaculis mauris ac tristique.</p>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>

      <hr />

      <h1 className="about-leader-header">Our Deacons</h1>
      <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
        <div className="about-deacon-container">
          <Row className="about-deacon-rowA">
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Lulu Lim</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Mimi Ahn</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Kay Choi</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Arlene & Virgil Macaraeg</h2>
            </Col>
          </Row>
          <Row className="about-deacon-rowB">
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Nilsa Morales</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Jason Park</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Daniel Hsin</h2>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>

      <hr />

      <h1 className="about-restofus-header">And the rest of our family!</h1>

      <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
        <div className="about-restofus-frame">
          <img className="about-restofus-image" src={GroupPic} alt="profile pic" />
        </div>
      </ScrollAnimation>
      <br/><br/><br/><br/>

    </div>
  )

}

export default About
