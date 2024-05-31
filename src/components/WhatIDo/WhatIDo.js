import React from "react";
import "./WhatIDo.css";
import { motion } from "framer-motion";
import Card from "../Card/Card";

const WhatIDo = ({ cardsData }) => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        id="about"
        className="section section--1 what-i-do-section"
      >
        <h1 className="primary-headline what-i-do-headline">What i do</h1>

        <div className="container cards-container">
          {cardsData.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </motion.section>
    </>
  );
};

export default WhatIDo;
