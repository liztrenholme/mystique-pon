import React, { Component } from 'react';
import PuppyBio from './PuppyBio';
import '../App.css';

class Puppies extends Component {
  constructor(props) {
    super(props);
  }
  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    const jude = {
      name: "Jude",
      colors: "brown and white",
      gender: "male",
      personality: "sweet and cuddly"
    }
    const sarah = {
      name: "Sarah",
      colors: "brown and white",
      gender: "female",
      personality: "curious"
    }
    const marvin = {
      name: "Marvin",
      colors: "black and white",
      gender: "male",
      personality: "wild"
    }
    const molly = {
      name: "Molly",
      colors: "black and white",
      gender: "female",
      personality: "spunky"
    }
    return (
      <div className="Puppies">
        <p>Puppies!</p>
        <PuppyBio name={jude.name} 
                  colors={jude.colors} 
                  gender={jude.gender} 
                  personality={jude.personality} />
        <PuppyBio name={sarah.name}
                  colors={sarah.colors} 
                  gender={sarah.gender} 
                  personality={sarah.personality} />
        <PuppyBio name={marvin.name}
                  colors={marvin.colors} 
                  gender={marvin.gender} 
                  personality={marvin.personality} />
        <PuppyBio name={molly.name}
                  colors={molly.colors} 
                  gender={molly.gender} 
                  personality={molly.personality} />
      </div>
    );
  }
}

export default Puppies;