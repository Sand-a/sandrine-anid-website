import React from "react";
import { ReactTyped } from "react-typed";
import "./HeroSection.css";
import DeveloperSvg from "../DeveloperSvg";
import { motion } from "framer-motion";
import DesignSvg from "../DesignSvg";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="container hero-section grid ">
        <div className="designer-box">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
          >
            <DesignSvg />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          >
            <p className="bodytext text-intro text-intro-1">
              Hey, I'm Sandrine from London
            </p>

            <p className="bodytext text-intro text-intro-2">
              I will design & develop a website that you and your audience will
              love !
            </p>

            <div className="btn-box">
              <motion.button
                whileTap={{ scale: 0.2 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
                className="btn btn-cta"
              >
                Let’s work together
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.2 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "var(--yellow)",
                  color: "black",
                  border: "transparent",
                }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
                className="btn btn-cta"
              >
                My Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="image-box"
        >
          <img src="/assets/sa-photo.png" alt="profile-pic" />
        </motion.div>
        <div className="developer-box">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
          >
            <DeveloperSvg />
          </motion.div>

          <p className="bodytext developer-text">
            <ReactTyped
              strings={[
                '< html >\n{ useState } from "react";\nonClick = { menuClose }\n grid-template-columns: 1fr ;\n{ CSS3 } media screen\nnpm start',
              ]}
              typeSpeed={60}
            ></ReactTyped>
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
