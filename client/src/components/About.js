import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import grouppic from '../photos/people/IMG_0582.JPG'
import profilepic from '../photos/tempprofilepic.jpg'

class About extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="about-mission-statement-out-container">
          <h1 className="about-our-mission">Our Mission</h1>
          <div className="about-mission-statement-in-container">
            <p className="about-mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.
            </p>
          </div>
        </div>
        <br /><br /><br /><br />
        <hr />

        <h1 className="about-our-leaders">Our Leaders</h1>
        <div className="about-container">
          <Row className="about-container-row">
            <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-row">
            <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-row">
            <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-row">
            <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
        </div>

        <hr />

        <h1 className="about-our-leaders">Our Deacons</h1>

        <div className="about-deacon-container">
          <Row className="about-deacon-row">
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Lulu Lim</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Mimi Ahn</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Kay Choi</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Arlene</h2></Col>
          </Row>
          <Row className="about-deacon-row">
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Nilsa</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Jason Park</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Daniel Hsin</h2></Col>
            <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Virgil</h2></Col>
          </Row>
        </div>

        <hr />

        <h1 className="about-restofus-header">And the rest of our family!</h1>

        <div className="about-restofus-frame">
          <img className="about-restofus-image" src={grouppic}></img>
        </div>

        <br/><br/><br/><br/>

      </div>
    )
  }
}

export default About
