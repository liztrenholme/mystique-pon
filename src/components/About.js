import React, { Component } from 'react';
import '../App.css';
import GreenToy from '../images/green-toy.JPG';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h5>About the Polish Lowland Sheepdog</h5>
                  <p> Also known as PON (Polski Owczarek Nizinny), 
                    this lively and clever dog is easy to train and 
                    posesses a good memory.  The breed is generally 
                    a healthy one, with a double coat commonly in 
                    white with black, grey or brown markings.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 links">
                  <h5>Helpful Links</h5>
                  <ul>
                    <li><a href="http://www.ponpuppybuyersguide.com">{'PON Puppy Buyer\'s Guide'}</a></li>
                    <li><a href="http://www.aponc.org">American Polish Lowland Sheepdog Club</a></li>
                    <li><a href="http://www.vetstreet.com/dogs/polish-lowland-sheepdog">VetStreet</a></li>
                    <li><a href="https://www.akc.org/dog-breeds/polish-lowland-sheepdog/">American Kennel Club</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Polish_Lowland_Sheepdog">Wikipedia entry on PONs</a></li>
                    <li><a href="http://www.members.tripod.com/~pon34/aboutpons.html">All About PONs</a></li>
                  </ul>
                </div>
                <div className="col-md-2">
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={GreenToy} alt="green toy" 
                width="100%" className="green-toy" />
            </div>
            <div className="col-md-1">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;