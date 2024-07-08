import React from "react";
import { motion } from "framer-motion";
import "./WhatIDo.css";

import Card from "../Card/Card";
import SectionHeadline from "../Utility/SectionHeadline";

const WhatIDo = ({ sectionRevealVariants, cardsData, menuData }) => {
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
          <SectionHeadline line1="what" line2="i do" position="center" />

          <div className="container cards-container">
            {cardsData.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default WhatIDo;
