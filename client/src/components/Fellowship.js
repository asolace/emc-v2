import React, { Component } from 'react';
import FGSlider from './FGSlider';
import TCSlider from './TCSlider';
import PMSlider from './PMSlider';
import SGSlider from './SGSlider';
import PGSlider from './PGSlider';

class Fellowship extends Component {
  render() {
    return (
      <div>
        <FGSlider />
        <TCSlider />
        <PMSlider />
        <SGSlider />
        <PGSlider />
      </div>
    )
  }
}

export default Fellowship
