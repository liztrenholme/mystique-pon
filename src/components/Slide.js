import React, { Component } from 'react';
import '../App.css';


class Slide extends Component {
    constructor(props) {
        super(props);
        //  Slide = ({ image, i }) => {
        // const slideImage = image[i];
        console.log(this.props.image);
        console.log(this.props);
        
    }
    render() {
        return <img className="slide" src={this.props.image} alt={this.props.index} />
    }
}
//   render() {
//     return (
//       <div className="Slide">
//         <p>Slide!</p>
//         <Slider />
//       </div>
//     );
//   }
// }

export default Slide;