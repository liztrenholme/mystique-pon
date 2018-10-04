import React, { Component } from 'react';
import '../App.css';
//import Playing from '../images/playing.JPG';

class PuppyBio extends Component {
  render() {
    return (
      <div className="PuppyBio">
        <img className="puppy-bio-image"
          src={this.props.image}
          alt={this.props.name} />
      </div>
    );
  }
}

export default PuppyBio;