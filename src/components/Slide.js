import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider';

class Slide extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Slide">
        <p>Slide!</p>
        <Slider />
      </div>
    );
  }
}

export default Slide;