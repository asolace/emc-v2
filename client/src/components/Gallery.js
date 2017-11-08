import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <div className="g-posA g-rowA g-fadein one">
        <img className="g-pic" src={picA}></img>
      </div>
      <div className="g-posA g-colB g-rowA g-fadein two">
        <img className="g-pic" src={picB}></img>
      </div>
      <div className="g-posA g-colC g-rowA g-fadein three">
        <img className="g-pic" src={picC}></img>
      </div>
      <div className="g-posA g-rowB g-fadein four">
          <img className="g-pic" src={picD}></img>
      </div>
      <div className="g-posA g-colB g-rowB g-fadein five">
        <img className="g-pic" src={picE}></img>
      </div>
      <div className="g-posA g-colC g-rowB g-fadein six">
        <img className="g-pic" src={picF}></img>
      </div>

    </div>
  )
}

export default Gallery
