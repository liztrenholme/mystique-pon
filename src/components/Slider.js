import React, { Component } from 'react';
import '../App.css';
import Puppy1 from '../images/puppy1.JPG';
import Puppy2 from '../images/puppy2.JPG';
import Puppy3 from '../images/puppy3.JPG';
import Puppy4 from '../images/puppy4.JPG';
import Puppy5 from '../images/puppy5.JPG';
import SittingSweetly from '../images/sitting-sweetly.PNG';
import Playing from '../images/playing.JPG';
import Headshot from '../images/headshot.JPG';

class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="picholder ">
                                <img className="d-block w-100 fade" src={Puppy1} alt="puppy1" />
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="picholder ">
                                    <img className="d-block fade portrait" src={SittingSweetly} alt="puppy5" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="picholder ">
                                    <img className="d-block w-100 fade" src={Puppy2} alt="puppy2" />
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="picholder ">
                                <img className="d-block w-100 fade" src={Puppy3} alt="puppy3" />
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="picholder ">
                                <img className="d-block fade portrait" src={Playing} alt="puppy5" />
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="picholder ">
                                <img className="d-block w-100 fade" src={Puppy4} alt="puppy4" />
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="picholder ">
                                <img className="d-block w-100 fade" src={Puppy5} alt="puppy5" />
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="picholder ">
                                <img className="d-block fade portrait" src={Headshot} alt="headshot" />
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;