import React, { Component } from 'react';
import '../App.css';
import GreenToy from '../images/green-toy.JPG';

class About extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-1">
            </div> */}
            <div className="col-md-6">
              <h5>About the Polish Lowland Sheepdog</h5>
              <p> This happy and clever dog ... </p>
            </div>
            <div className="col-md-3">
              <img src={GreenToy} alt="green toy" height="40%" className="green-toy" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="links">
              <h5>Further Reading</h5>
              <ul>
                <li><a href="http://www.aponc.org">American Polish Lowland Sheepdog Club</a></li>
                <li><a href="http://www.vetstreet.com/dogs/polish-lowland-sheepdog">VetStreet</a></li>
                <li><a href="https://www.akc.org/dog-breeds/polish-lowland-sheepdog/">American Kennel Club</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Polish_Lowland_Sheepdog">Wikipedia entry on PONs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;