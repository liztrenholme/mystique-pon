import React, { Component } from 'react';
import '../App.css';
//import Playing from '../images/playing.JPG';

class PuppyBio extends Component {
    constructor(props) {
        super(props);
      }
    // puppyName = <div className="puppy-name" name />;
   render() {
    return (
      <div className="PuppyBio">
        <div className="puppy-each">
            <p className="puppy-name">{this.props.name}</p>
            <p className="puppy-description">{this.props.name} is a {this.props.personality} {this.props.gender} and is {this.props.colors}.</p>
        </div>
      </div>
    );
  }
}

export default PuppyBio;