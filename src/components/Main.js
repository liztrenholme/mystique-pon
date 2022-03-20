// todo: 
// - add in pictures
// - fix youtube video
// - better formatting for layout of cards
// - fix intro box- too intrusive!
// - carousel for pictures moible friendly?
// - add pictures to gallery


import React, { Component } from 'react';
import '../App.css';
// import Pumpkin from '../images/pumpkin.JPEG';
// import Pumpkin1 from '../images/pumpkin1.JPEG';
// import Pumpkin2 from '../images/pumpkin2.JPEG';
// import Pumpkin3 from '../images/pumpkin3.JPEG';
// import Pumpkin4 from '../images/pumpkin4.JPEG';
// import Simon from '../images/simon.JPG';
// import Layla from '../images/headshot.JPG';
import MomAndPups from '../images/together-nature.png';
// import SireDinky from '../images/IMG_7065.JPG';
// import DamLayla from '../images/IMG_7188.jpeg';
import DamBella from '../images/BellaRamp.jpg';
import SireMilosz from '../images/MiloszHead.jpg';
// import PuppyBackground from '../images/puppy1.JPG';
import ReactPlayer from 'react-player';

class Main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const vidUrl = 'https://www.youtube.com/watch?v=KiHCIIXhr0c';
    return (
      <div className="Main">
        <div className='main-title-box'>
          <h1 className='main-title'>Enchanting PONs</h1>
          <h2 className='main-subtitle'>Polish Lowland Sheepdogs</h2>
        </div>
        <div className='parallax-bg'>
        </div>

        {/* <div className="welcome"> */}
        {/* <div className="row lineup-row"> */}
        <div className='content-container'>
          <div className="intro-box">
            <div className='lineup-row'>
              <div className="puppy-lineup fade">
                <img className="together" src={MomAndPups} alt="mom and puppies together" />
              </div>
              <div className="welcome-msg fade">
                <h4>Welcome!</h4>
                <p className="welcome-blurb">
              After being involved with the PON breed for over eighteen years,
                I have decided to start a breeding program here in Northeast Ohio.
                My foundation bitch is Layla (5 years old), 
                a <a href="http://www.snowhillpons.com/">Snowhill</a> PON.
                She is a fantastic mother with a wonderful temperament.
                My goal as a breeder is to produce beautiful, healthy 
                puppies with similarly desirable temperaments, and
                I want them to ultimately be as much a member of the 
                family as well as great champions. Please enjoy the
                website, and watch for updates as we grow!</p>
              </div>
            </div>
          </div>


          <div className="container container-main">
            <div className="coming-soon">
              <div>
                <div className="announcement">
                  <div className="announce-msg">
                    <h1>Expecting...</h1>
                    <p className='announcement-text'>{`We are pleased to announce that we are expecting puppies around April 15, 2022!  These
                    puppies will be ready to go to their homes in June. Descending from a long line of AKC champions, the puppies' parents have been tested for PRA,
                    hip dysplasia, CERF and are CHIC certified through the OFA.`}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="row card-row">
                <div className="card">
                  <h3 style={{padding: '0.5em'}} className="card-text">{'Sire: GCHS Just Hajko Agrest "Milosz"'}</h3>
                  <img className="card-img-top announce-pic" src={SireMilosz} alt="simon" />
                  <div className="card-body">
                    <h5>Awards: </h5>
                    <ul>
                      <li>2021 APONC National and Regional Specialty Winner</li>
                      <li>2021 AKC Championship Best of Opposite Sex</li>
                      <li>Number 1 PON 2019 + 2020</li>
                      <li>Multiple Group Placing</li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <h3 style={{padding: '0.5em'}} className="card-text">{'Dam: GCHS Echantingpon Charming Belle and the Beast CGC "Bella"'}</h3>
                  <img className="card-img-top announce-pic" src={DamBella} alt="layla" />
                  <div className="card-body">
                    <h5>Awards: </h5>
                    <ul>
                      <li>2021 APONC Regional Specialty Best of Oppposite Sex</li>
                      <li>2020 + 2021 Best of Opposite Sex Westminster</li>
                      <li>Number 4 PON 2021 All Breed PON</li>
                      <li>Number 2 2021 Breed PON</li>
                      <li>Number 3 2020 Breed PON</li>
                      <li>Number 1 2021 and 2020 Owner Handled</li>
                      <li>Number 3 2019 Owner Handled</li>
                      <li>Multiple Group Placing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="coming-soon">
              <div>
                <div className="announcement">
                  <div className="announce-msg">
                    <h1>Announcing...</h1>
                    <p className='announcement-text'>{`Two boys and one girl!! We are pleased to announce the birth of Dinky's and Layla's puppies, born August 16, 2021!
                    Descending from a long line of AKC champions, the puppies' parents have been tested for PRA,
                    hip dysplasia, CERF and are CHIC certified.`}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="row card-row">
                <div className="card">
                  <img className="card-img-top announce-pic" src={SireDinky} alt="simon" />
                  <div className="card-body">
                    <h6 className="card-text">Sire: Luke Skywalker Pacynka Dinky</h6>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top announce-pic" src={DamLayla} alt="layla" />
                  <div className="card-body">
                    <h6 className="card-text">Dam: GCH Snowhill Spirit of the Moon CGC</h6>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='col-md-12 video-player'>
              <ReactPlayer 
                className='react-player'
                url={vidUrl}
                // light
                controls
                width='100%'
                height='100%'
              />
            </div>
            {/* <div>
              <div className="updates-blog">
                <img src={SireDinky} className="puppy-pumpkin" alt="Sire Dinky" />
                <img src={DamLayla} className="puppy-pumpkin" alt="Dam Layla" />
                <img src={Pumpkin3} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin1} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin2} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin4} className="puppy-pumpkin" alt="puppy with pumpkins" />
                <img src={Pumpkin} className="puppy-pumpkin" alt="puppy with pumpkins" />
              </div>
            </div> */}
            {/* <div className="row">
              <div>
                <div className="card">
                  <img className="card-img-top announce-pic" src={Simon} alt="simon" />
                  <div className="card-body">
                    <h6 className="card-text">Sire</h6>
                  </div>
                </div>
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
            </div> */}
          </div>
        </div>
        {/* <div className="col-md-1">
        </div> */}
        {/* </div> */}
        {/* <div className="row">
          <div className="col-md-12">
            <div className="empty" />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Main;