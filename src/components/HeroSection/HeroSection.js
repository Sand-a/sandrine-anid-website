import React from "react";

import "./HeroSection.css";

import { motion } from "framer-motion";

import { containerVariants, childVariants } from "../data/animationsData";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="hero--section" style={{ width: "100%" }}>
        <motion.div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          className="line-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.div
            style={{
              overflow: "hidden",
            }}
          >
            <motion.p variants={childVariants} className="top-line">
              creative web
            </motion.p>
          </motion.div>
          <motion.div
            style={{
              overflow: "hidden",
            }}
          >
            <motion.p variants={childVariants} className="main-line">
              Designer<span className="top-line top-line-and">&</span>
            </motion.p>
          </motion.div>
          <motion.p variants={childVariants} className="main-line">
            Developer{" "}
          </motion.p>
        </motion.div>
        <motion.div
          className="line-text-container"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <p className="line-text line-text--1">
            I'm a UI/UX Designer & Frontend Developer based in London.
          </p>
          <p className="line-text line-text--2">
            – I will turn your ideas into reality!
          </p>
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;
