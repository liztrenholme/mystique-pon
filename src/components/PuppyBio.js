import React, { Component } from 'react';
import '../App.css';
//import Playing from '../images/playing.JPG';

class PuppyBio extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="PuppyBio">
        <p>A component to render with info on each puppy passed down to it!</p>
      </div>
    );
  }
}

export default PuppyBio;