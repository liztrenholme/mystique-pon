import React, { Component } from 'react';
import '../App.css';
import Playing from '../images/playing.JPG';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <div className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-6">
              <h5>Welcome!</h5>
              <p>After being involved with the PON breed for over eighteen years, I have decided to start a breeding program here in Northeast Ohio.</p>
            </div>
            <div className="col-md-3">
              <img src={Playing} alt="green toy" height="40%" className="green-toy" />
            </div>
          </div>
          <div className="row">
          <div className="announcement">
            <div className="col-md-1">
            </div>
            <div className="col-md-6">
            <h5>Announcing</h5>
            <p>We are pleased announce the birth of Simon and Layla's puppies born (date).</p>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Main;