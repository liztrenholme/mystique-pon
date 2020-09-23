import React, { Component } from 'react';
import '../App.css';
//import Playing from '../images/playing.JPG';
import PropTypes from 'prop-types';

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

PuppyBio.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default PuppyBio;