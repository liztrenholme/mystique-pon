import React, { Component } from 'react';
import '../App.css';
// import Playing from '../images/playing.JPG';
import Puppy2 from '../images/puppy2.JPG';
import Puppy3 from '../images/puppy3.JPG';
import Puppy4 from '../images/puppy4.JPG';
import Puppy5 from '../images/puppy5.JPG';
import Simon from '../images/simon.JPG';
import Layla from '../images/sitting-sweetly.PNG';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <div className="welcome">
          <div className="container container-main">
            <div className="row">
              {/* <div className="col-md-2">
              </div> */}
              <div className="col-md-12">
                <div className="puppy-lineup">
                  <img className="lineup fade" src={Puppy2} alt="pup" />
                  <img className="lineup fade" src={Puppy3} alt="pup" />
                  <img className="lineup fade" src={Puppy4} alt="pup" />
                  <img className="lineup fade" src={Puppy5} alt="pup" />
                </div>
              </div>
              {/* <div className="col-md-2">
              </div> */}
            </div>
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-6 welcome-msg">
                <h5>Welcome!</h5>
                <p>After being involved with the PON breed for over eighteen years, I have decided to start a breeding program here in Northeast Ohio.</p>
              </div>
              <div className="col-md-3">
                {/* <img src={Playing} alt="green toy" height="40%" className="green-toy" /> */}
              </div>
            </div>
            <div className="row">
              <div className="announcement">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                  <h4>Announcing...</h4>
                  <p>We are pleased to announce the birth of Simon and Layla's puppies born (date)!  The puppies' parents have been tested for PRA, hip dysplaxia, CERF and are CHIC certified.</p>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-med-4">
                <div className="card">
                  <img className="card-img-top announce-pic" src={Simon} alt="simon" />
                  <div className="card-body">
                    <h6 className="card-text">Sire</h6>
                  </div>
                </div>
              </div>
              <div className="col-med-2">
                <div className="empty"/>
              </div>
              <div className="col-med-4">
                <div className="card">
                  <img className="card-img-top announce-pic" src={Layla} alt="layla" />
                  <div className="card-body">
                    <h6 className="card-text">Dam</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
        </div>

      </div>
    );
  }
}

export default Main;