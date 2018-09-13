import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider';

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <Slider />
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;