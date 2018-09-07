import React from 'react';
import '../App.css';


    const Slide = ({ image, i }) => {
        const slideImage = image[i];
        return <div className="slide" image={slideImage}></div>
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