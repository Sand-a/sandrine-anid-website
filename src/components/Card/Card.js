import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <img src={card.icon} alt="" />
        <h1>{card.title}</h1>
      </div>
      <div className="card-text">
        <h2 className="card-slogan">{card.slogan}</h2>
        <p className="card-text bodytext">{card.text}</p>
        <h3 className="card-skills">{card.skills}</h3>
      </div>
    </div>
  );
};

export default Card;
