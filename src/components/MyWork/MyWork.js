import React from "react";
import { motion } from "framer-motion";
import "./Slider.css";
import "../Card/Card.css";
import Slider from "./Slider";

const MyWork = ({ sectionRevealVariants, projectsData }) => {
  return (
    <>
      <section id="selected-work" className="section--3">
        <motion.div
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="section projects-section"
        >
          <h1 className="primary-headline projects-headline">
            {"Selected \n work"}
          </h1>
          <Slider projectsData={projectsData} />
        </motion.div>
      </section>
    </>
  );
};

export default MyWork;
