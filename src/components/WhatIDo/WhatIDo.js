import React from "react";
import { motion } from "framer-motion";
import "./WhatIDo.css";

import Card from "../Card/Card";

const WhatIDo = ({ sectionRevealVariants, cardsData }) => {
  return (
    <>
      <section id="about" className="section--1">
        <motion.div
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="show"
          viewport="when"
          className="section what-i-do-section"
        >
          <h1 className="primary-headline what-i-do-headline">What i do</h1>

          <div className="container cards-container">
            {cardsData.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default WhatIDo;
