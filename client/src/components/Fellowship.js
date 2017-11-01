import React, { Component } from 'react';
import Slider from './Slider';

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

class Fellowship extends Component {
  render() {
    return (
      <div>
        <Slider carouselItems={carouselItems1} />
        <Slider carouselItems={carouselItems2} />
      </div>
    )
  }
}

export default Fellowship
