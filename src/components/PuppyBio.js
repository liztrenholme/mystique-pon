import React, { Component } from 'react';
import '../App.css';
//import Playing from '../images/playing.JPG';

class PuppyBio extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    // puppyName = <div className="puppy-name" name />;
   render() {
    return (
      <div className="PuppyBio">
        <div className="puppy-each">
            <img className="puppy-bio-image" 
            src={this.props.image} 
            alt={this.props.name} />
        </div>
      </div>
    );
  }
}

export default PuppyBio;