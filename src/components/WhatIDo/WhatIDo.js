import React from "react";
import { motion } from "framer-motion";
import "./WhatIDo.css";

import Card from "../Card/Card";

const WhatIDo = ({ sectionRevealVariants, cardsData }) => {
  return (
    <>
      <section id="what-i-do" className="section--1">
        <motion.div
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="section what-i-do-section"
        >
          <div className="headline-title">
            <h1 className="primary-headline what-i-do-headline">What i do </h1>
          </div>
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
