import React, { Component } from 'react';
import '../App.css';
// import Playing from '../images/playing.JPG';
// import Puppy2 from '../images/puppy2.JPG';
// import Puppy3 from '../images/puppy3.JPG';
// import Puppy4 from '../images/puppy4.JPG';
// import Puppy5 from '../images/puppy5.JPG';
import Simon from '../images/simon.JPG';
import Layla from '../images/headshot.JPG';
import MomAndPups from '../images/together-nature.png';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="welcome">
          <div className="container container-main">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8">
                <div className="puppy-lineup fade">
                  <img className="together" src={MomAndPups} alt="puppies together" />
                </div>
              </div>
              <div className="col-md-2">
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-10 welcome-msg">
                <h4>Welcome!</h4>
                <p>After being involved with the PON breed for over eighteen years, 
                  I have decided to start a breeding program here in Northeast Ohio.  
                  My foundation bitch is Layla (3 years old), a <a href="http://www.snowhillpons.com/">Snowhill's</a> PON with a wonderful 
                  temperament, and has been a fantastic mother. My goal as a breeder is to produce 
                  beautiful puppies with wonderful temperaments, making great family members as 
                  well as structurally sound puppies to produce great champions. Please enjoy the website,
                   which will be updated as we grow.</p>
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
                  <p>We are pleased to announce the birth of Simon and Layla's puppies born August 8, 2018!  
                    Descending from a long line of AKC champions, the puppies' parents have been tested for PRA, 
                    hip dysplasia, CERF and are CHIC certified.</p>
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
        <div className="row">
        <div className="col-md-12">
        <div className="empty"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Main;