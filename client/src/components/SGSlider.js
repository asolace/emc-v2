import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import carousel1 from '../photos/carousel-1.jpg'
import carousel2 from '../photos/carousel-2.jpg'
import carousel3 from '../photos/carousel-3.jpg'
import carousel4 from '../photos/carousel-4.jpg'
import carousel5 from '../photos/carousel-5.jpg'
import carousel6 from '../photos/carousel-6.jpg'
import carousel7 from '../photos/carousel-7.jpg'

const items = [
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
  },
  {
    src: carousel4,
    altText: '',
    caption: ''
  },
  {
    src: carousel5,
    altText: '',
    caption: ''
  },
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


class SGSlider extends Component {
  state = {
    activeIndex: 0
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <div className="fellowship-slider-container">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    )
  }
}

export default SGSlider
