import React from "react";
import "./material.css";

import material1 from "../screen/asset/plastic_bottle.jpg";
import material2 from "../screen/asset/can_i_recycle_header.png";
import material3 from "../screen/asset/E-waste.jpg";
import material4 from "../screen/asset/glass-bottles-recycling.jpg";
import material5 from "../screen/asset/organics_recycling.jpg";
import material6 from "../screen/asset/light_bulb recycling.jpg";
import material7 from "../screen/asset/paper_recycling.jpg";
import material8 from "../screen/asset/mental_recycling.jpg";

function Materials() {
  return (
    <div className="materails">
      <div className="materail">
        <img src={material1} alt="image1" />
        <p>Glass Plastic</p>
      </div>
      <div className="materail">
        <img src={material2} alt="image2" />
        <p>Cap of Bottle</p>
      </div>
      <div className="materail">
        <img src={material3} alt="image3" />
        <p>E-Waste</p>
      </div>
      <div className="materail">
        <img src={material4} alt="image4" />
        <p>Glass</p>
      </div>
      <div className="materail">
        <img src={material5} alt="image5" />
        <p>Organics</p>
      </div>
      <div className="materail">
        <img src={material6} alt="image6" />
        <p>Light Bulb</p>
      </div>
      <div className="materail">
        <img src={material7} alt="image7" />
        <p>Plastic</p>
      </div>

      <div className="materail">
        <img src={material8} alt="image8" />
        <p>Paper</p>
      </div>
    </div>
  );
}

export default Materials;
