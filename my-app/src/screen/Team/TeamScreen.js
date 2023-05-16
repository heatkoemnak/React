import React from "react";
import sodanaSom from "../asset/sodana_som.jpg";
import sopheakSaing from "../asset/sopheak_saing.jpg";
import manySou from "../asset/sou_many.jpg";
import koemnakHeat from "../asset/koemnak_heat.jpg";

import "./team.css";
const teamImage = [
  {
    id: 1,
    image: sodanaSom,
  },
  {
    id: 2,
    image: sopheakSaing,
  },
  {
    id: 3,
    image: koemnakHeat,
  },
  {
    id: 4,
    image: manySou,
  },
];

const TeamScreen = () => {
  return (
    <>
      <div className="header-team">OUR TEAM</div>
      <div className="team-container">
        {teamImage.map((cartImage) => (
          <div key={cartImage.id}>
            <div className="team-image">
              <img src={cartImage.image} alt="" width="300"></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamScreen;
