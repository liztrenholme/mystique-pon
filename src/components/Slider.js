import React, { Component } from 'react';
import '../App.css';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  goToPrevSlide = () => {
    
}

goToNextSlide = () => {
  
}

  render() {
    return (
      <div className="slider">
      <Slide />

      <LeftArrow 
        goToPrevSlide={this.goToPrevSlide}
      />
      <RightArrow 
        goToNextSlide={this.goToNextSlide}
      />
				
      </div>
    );
  }
}

export default Slider;