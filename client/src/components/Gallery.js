import React from 'react';

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
      <div className="g-posA g-one g-fadein one">
        <img className="g-pic" alt="pics" src={picA}></img>
      </div>
      <div className="g-posA g-two g-fadein two">
        <img className="g-pic" alt="pics" src={picB}></img>
      </div>
      <div className="g-posA g-three g-fadein three">
        <img className="g-pic" alt="pics" src={picC}></img>
      </div>
      <div className="g-posA g-four g-fadein four">
          <img className="g-pic" alt="pics" src={picD}></img>
      </div>
      <div className="g-posA g-five g-fadein five">
        <img className="g-pic" alt="pics" src={picE}></img>
      </div>
      <div className="g-posA g-six g-fadein six">
        <img className="g-pic" alt="pics" src={picF}></img>
      </div>

    </div>
  )
}

export default Gallery
