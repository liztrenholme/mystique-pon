import React, { Component } from 'react';
import PuppyBio from './PuppyBio';
import '../App.css';

class Puppies extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Puppies">
        <p>Puppies!</p>
        <PuppyBio />
      </div>
    );
  }
}

export default Puppies;