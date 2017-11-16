import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Background, Parallax } from 'react-parallax';
import GroupPic from '../photos/people/IMG_0582.JPG';
import profilepic from '../photos/tempprofilepic.jpg';
import missionimage from '../photos/blurrychurchedited.jpg'

import Ricky from '../photos/emcleaders/1.jpg';
import Jae from '../photos/emcleaders/2.jpg';
import Jason from '../photos/emcleaders/3.jpg';
import Lulu from '../photos/emcleaders/4.jpg';
import Mimi from '../photos/emcleaders/5.jpg';
import Nilsa from '../photos/emcleaders/6.jpg';
import Pio from '../photos/emcleaders/7.jpg';
import Sooil from '../photos/emcleaders/8.jpg';
import Daniel from '../photos/emcleaders/9.jpg';
import ArleneVirgil from '../photos/emcleaders/10.jpg';

const About = () => {
  return (
    <div className="about-page-container">
      <div className="aa">
        <div className="ae" />
        <div className="ad">
        <h1 className="ab">Our Mission</h1>
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <p className="ac">
          The Ebenezer Mission Church exists to bring glory to God by
          making disciples of all nations by planting our lives
          amongst people groups and living out obedient life publicly.
          </p>
        </ScrollAnimation>
        </div>
      </div>

      <br /><br />

      <h1 className="about-leader-header">Our Leaders</h1>
      <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
        <div className="about-leader-container">
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={Jae} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Pastor Jae Lee</h2>
              <p className="about-leader-text jae">
                Serving as an overseer of EMC, Jae enjoys being friends to everyone he meets through the ministry of EMC.  His passion is sharing the grace of God in more tangible ways by starting Christ-sharing small gatherings, hopefully all around the world.  He is married to Ellen and lives with two middle schoolers, Sophia and Jeremy.   </p>
            </Col>
          </Row>
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={Pio} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Pastor Pio Lee</h2>
              <p className="about-leader-text">
                Pio has called many places home—Korea, Romania, Germany—before moving to the U.S. to begin married life and ministry with his wife Ellen. He thinks of himself as a pilgrim who will eventually head home to heaven!  Pio began his theological studies at Freie Theologische Hochschule in Giessen, and completed his studies at the Southern Baptist Theological Seminary (Th.M., Ph.D.) in Louisville.  EMC has been his home since moving to New York City. He is passionate about prayer and preaching God’s living Word to people.</p>
            </Col>
          </Row>
          <Row className="about-leader-row">
            <Col>
              <div className="about-leader-image-border">
                <img className="about-leader-image" src={Ricky} alt="profile pic"/>
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
                <img className="about-leader-image" src={Sooil} alt="profile pic"/>
              </div>
            </Col>
            <Col>
              <h2 className="about-leader-name">Dr. Soo-il Lee</h2>
              <p className="about-leader-text sooil">
                Dr. Soo-il Lee is a clinician, professor, lecturer, columnist and pastor. He is currently Director of Communioty Residence at Life Recvery center, Department of Psychiatry at Bronx Lebanon Hospital Center. He acquired B.S. and M. Ed. in Physical Education and Sport Sociology, respectively, at Seoul National University. He also received M.Ed. in Therapeutic Recreation at Springfield College, MA in Mental Health/Christian Counseling at Nyack College, and Ph. D. in Health Studies at NYU. He has been adjunct assistant professor at Lehman College (CUNY) and Nyack College (Alliance Graduate School of Counseling. He also teaches counseling theories and practices at two local Korean seminaries. He has been involved with Christian ministry for youth and young adults, currently cooperating pastor at NY Ebenezer Mission Church, Bayside, Queens. He is the recipient of multiple awards from his professional organizations and Korean Community organizations for his God-given pro-bono counseling services. </p>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>

      <h1 className="about-deacon-header">Our Deacons</h1>
      <div className="about-deacon-container">
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <Row className="about-deacon-rowA">
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={Lulu} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Lulu Lim</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={Mimi} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Mimi Ahn</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={Nilsa} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Nilsa Morales</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderA">
                <img className="about-deacon-image" src={profilepic} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameA">Kay Choi</h2>
            </Col>
          </Row>
          <Row className="about-deacon-rowB">
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={ArleneVirgil} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Arlene & Virgil Macaraeg</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={Jason} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Jason Park</h2>
            </Col>
            <Col>
              <div className="about-deacon-image-borderB">
                <img className="about-deacon-image" src={Daniel} alt="profile"></img>
              </div>
              <h2 className="about-deacon-nameB">Daniel Hsin</h2>
            </Col>
          </Row>
        </ScrollAnimation>
      </div>

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
