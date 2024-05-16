import React from "react";
import "./WhatIDo.css";
import Card from "../Card/Card";

const WhatIDo = ({ cardsData }) => {
  return (
    <>
      <div id="about" className="what-i-do-section">
        <h1 className="primary-headline what-i-do-headline">What i do</h1>

        <div className="container cards-container">
          {cardsData.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
