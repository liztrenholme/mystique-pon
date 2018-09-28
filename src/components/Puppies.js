import React, { Component } from 'react';
import PuppyBio from './PuppyBio';
import '../App.css';
import Puppy1Pic from '../images/p1.jpg'
import Puppy2Pic from '../images/p2.jpg'
import Puppy3Pic from '../images/p3.jpg'
import Puppy4Pic from '../images/p4.jpg'

class Puppies extends Component {
  render() {
    const Puppy1 = {
      name: "puppy one",
      image: Puppy1Pic,
      colors: "brown and white",
      gender: "male",
      personality: "sweet and cuddly"
    }
    const Puppy2 = {
      name: "puppy two",
      image: Puppy2Pic,
      colors: "brown and white",
      gender: "female",
      personality: "curious"
    }
    const Puppy3 = {
      name: "puppy three",
      image: Puppy3Pic,
      colors: "black and white",
      gender: "male",
      personality: "wild"
    }
    const Puppy4 = {
      name: "puppy four",
      image: Puppy4Pic,
      colors: "black and white",
      gender: "female",
      personality: "spunky"
    }
    return (
      <div className="Puppies">
        <div className="row">
          <div className="col-md-5">
            <PuppyBio image={Puppy1.image}
              name={Puppy1.name} />
            <PuppyBio image={Puppy2.image}
              name={Puppy2.name} />
          </div>
          <div className="col-md-5">
            <PuppyBio image={Puppy3.image}
              name={Puppy3.name} />
            <PuppyBio image={Puppy4.image}
              name={Puppy4.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default Puppies;