import React, { Component } from 'react';
import PuppyBio from './PuppyBio';
import '../App.css';

class Puppies extends Component {
  render() {
    const Puppy1 = {
      name: "Puppy1",
      colors: "brown and white",
      gender: "male",
      personality: "sweet and cuddly"
    }
    const Puppy2 = {
      name: "Puppy2",
      colors: "brown and white",
      gender: "female",
      personality: "curious"
    }
    const Puppy3 = {
      name: "Puppy3",
      colors: "black and white",
      gender: "male",
      personality: "wild"
    }
    const Puppy4 = {
      name: "Puppy4",
      colors: "black and white",
      gender: "female",
      personality: "spunky"
    }
    return (
      <div className="Puppies">
        <PuppyBio name={Puppy1.name} 
                  colors={Puppy1.colors} 
                  gender={Puppy1.gender} 
                  personality={Puppy1.personality} />
        <PuppyBio name={Puppy2.name}
                  colors={Puppy2.colors} 
                  gender={Puppy2.gender} 
                  personality={Puppy2.personality} />
        <PuppyBio name={Puppy3.name}
                  colors={Puppy3.colors} 
                  gender={Puppy3.gender} 
                  personality={Puppy3.personality} />
        <PuppyBio name={Puppy4.name}
                  colors={Puppy4.colors} 
                  gender={Puppy4.gender} 
                  personality={Puppy4.personality} />
      </div>
    );
  }
}

export default Puppies;