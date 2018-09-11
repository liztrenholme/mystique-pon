import React, { Component } from 'react';
import '../App.css';
import Playing from '../images/playing.JPG';
import Puppy2 from '../images/puppy2.JPG';
import Puppy3 from '../images/puppy3.JPG';
import Puppy4 from '../images/puppy4.JPG';
import Puppy5 from '../images/puppy5.JPG';
import Simon from '../images/simon.JPG';
import Layla from '../images/dam.JPG';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <div className="welcome">
          <div className="container container-main">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-10">
                <div className="puppy-lineup">
                  <img className="lineup" src={Puppy2} alt="pup" />
                  <img className="lineup" src={Puppy3} alt="pup" />
                  <img className="lineup" src={Puppy4} alt="pup" />
                  <img className="lineup" src={Puppy5} alt="pup" />
                </div>
              </div>
            </div>
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
                  
                  <div className="row">
                    <div className="col-med-2">
                      <h6>Sire</h6>
                      <img className="announce-pic sire" src={Simon} alt="simon" />
                    </div>
                    <div className="col-med-2">
                    <h6>Dam</h6>
                    <img className="announce-pic dam" src={Layla} alt="layla" />
                    </div>
                  </div>
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