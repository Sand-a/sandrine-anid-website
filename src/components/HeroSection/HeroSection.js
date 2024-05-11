import React from "react";
import "./HeroSection.css";
import DeveloperSvg from "../DeveloperSvg";
import { motion } from "framer-motion";
import DesignSvg from "../../DesignSvg";
const slideToRightVariants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
  },
};
const slideToLeftVariants = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.5, duration: 1, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="container hero-section grid ">
        <motion.div
          variants={slideToRightVariants}
          initial="hidden"
          animate="visible"
          className="designer-box"
        >
          <DesignSvg />
          <p className="bodytext text-intro text-intro-1">
            Hello , i'm Sandrine, based in London
          </p>

          <p className="bodytext text-intro text-intro-2">
            I will design & develop a website that you and your audience will
            love!
          </p>
        </motion.div>
        <div className="image-box">
          <img src="/assets/sa-photo.png" alt="sa-photo" />
        </div>
        <motion.div
          variants={slideToLeftVariants}
          initial="hidden"
          animate="visible"
          className="developer-box"
        >
          <DeveloperSvg />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
