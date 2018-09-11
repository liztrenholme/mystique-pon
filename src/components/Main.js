import React, { Component } from 'react';
import '../App.css';
import Playing from '../images/playing.JPG';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <div className="welcome">
          <img src={Playing} alt="playing puppy" height="80%" className="playing-image" />
        </div>
      </div>
    );
  }
}

export default Main;