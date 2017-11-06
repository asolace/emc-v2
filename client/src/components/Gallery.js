import React from 'react';
import { Row, Col } from 'reactstrap';

import picA from '../photos/emcgallery/1.jpg'
import picB from '../photos/emcgallery/2.jpg'
import picC from '../photos/emcgallery/3.jpg'
import picD from '../photos/emcgallery/4.jpg'
import picE from '../photos/emcgallery/5.JPG'
import picF from '../photos/emcgallery/6.JPG'

const Gallery = () => {
  return (
    <div className="g-page">
      <div className="g-header">Gallery</div>
      <br/>
      <Row>
        <div className="g-rowA-colA">
          <Col>
            <img className="g-picA"src={picA}></img>
          </Col>
        </div>
        <div className="g-rowA-colB">
          <Col>
            <Row>
              <Col>
                <img className="g-picB"src={picB}></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <img className="g-picC"src={picC}></img>
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
      <Row>
        <div className="g-rowB-colA">
          <Col>
            <Row>
              <Col>
                <img className="g-picD"src={picD}></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <img className="g-picE"src={picE}></img>
              </Col>
            </Row>
          </Col>
        </div>
        <div className="g-rowB-colB">
          <Col>
            <img className="g-picF"src={picF}></img>
          </Col>
        </div>
      </Row>
    </div>
  )
}

export default Gallery
