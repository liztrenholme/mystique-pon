import React, { Component } from 'react';
import '../App.css';
import Pumpkin from '../images/pumpkin.JPEG';
import Pumpkin1 from '../images/pumpkin1.JPEG';
import Pumpkin2 from '../images/pumpkin2.JPEG';
import Pumpkin3 from '../images/pumpkin3.JPEG';
import Pumpkin4 from '../images/pumpkin4.JPEG';
import Simon from '../images/simon.JPG';
import Layla from '../images/headshot.JPG';
import MomAndPups from '../images/together-nature.png';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="welcome">
          <div className="row lineup-row">
            <div className="col-md-7">
              <div className="puppy-lineup fade">
                <img className="together" src={MomAndPups} alt="puppies together" />
              </div>
            </div>
            <div className="col-md-4 welcome-msg fade">
              <h4>Welcome!</h4>
              <p className="welcome-blurb">
              After being involved with the PON breed for over eighteen years,
                I have decided to start a breeding program here in Northeast Ohio.
                My foundation bitch is Layla (3 years old), 
                a <a href="http://www.snowhillpons.com/">Snowhill</a> PON.
                She is a fantastic mother with a wonderful temperament.
                My goal as a breeder is to produce beautiful, healthy 
                puppies with similarly desirable temperaments, and
                I want them to ultimately be as much a member of the 
                family as well as great champions. Please enjoy the
                website, and watch for updates as we grow!</p>
            </div>
          </div>
          <div className="container container-main">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-10 updates-blog">
                <img src={Pumpkin3} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin1} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin2} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin4} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin} className="puppy-pumpkin" alt="puppy with pumpkins" />
              </div>
              <div className="col-md-1">
              </div>
            </div>
            <div className="row">
              <div className="announcement">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 announce-msg">
                  <h4>Announcing...</h4>
                  <p>{`We are pleased to announce the birth of Simon and Layla's puppies born August 8, 2018!
                    Descending from a long line of AKC champions, the puppies' parents have been tested for PRA,
                    hip dysplasia, CERF and are CHIC certified.`}</p>
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
                <div className="empty" />
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
        <div className="row">
          <div className="col-md-12">
            <div className="empty" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;