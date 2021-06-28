import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider';

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <Slider />
      </div>
    );
  }
}

export default Gallery;