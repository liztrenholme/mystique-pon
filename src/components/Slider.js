import React, { Component } from 'react';
import '../App.css';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Puppy1 from '../images/puppy1.JPG';
import Puppy2 from '../images/puppy2.JPG';
import Puppy3 from '../images/puppy3.JPG';
import Puppy4 from '../images/puppy4.JPG';
import Puppy5 from '../images/puppy5.JPG';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Puppy1, Puppy2, Puppy3, Puppy4, Puppy5],
            currentIndex: 0
        }
    }

    goToPrevSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">
            <p>Slider component here</p>
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />

            </div>
        );
    }
}

export default Slider;