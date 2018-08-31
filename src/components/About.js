import React, { Component } from 'react';
import '../App.css';
import GreenToy from '../images/green-toy.JPG';

class About extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="About">
        <p>About!</p>
        <p> This paragraph will be about all tha is involved with puppies! </p>
        <img src={GreenToy} alt="green toy" height="80%" className="green-toy" />
      </div>
    );
  }
}

export default About;