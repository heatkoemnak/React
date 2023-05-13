import React from 'react'

import material1 from "../screen/asset/1.webp";
import material2 from "../screen/asset/1.webp";
import material3 from "../screen/asset/2.jpg";
import material4 from "../screen/asset/3.jpg";
import material5 from "../screen/asset/4.jfif";
import material6 from "../screen/asset/5.jpg";
import material7 from "../screen/asset/6.jpg";
import material8 from "../screen/asset/1.webp";

function Materials () {
  return (
    <div className="materails">
      <div className="materail">
        <img src={material1} alt="image1" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material2} alt="image2" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material3} alt="image3" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material4} alt="image4" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material5} alt="image5" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material6} alt="image6" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material7} alt="image7" />
        <p>Plastic</p>
      </div>

      <div className="materail">
        <img src={material8} alt="image8" />
        <p>Plastic</p>
      </div>
    </div>
  )
}

export default Materials 