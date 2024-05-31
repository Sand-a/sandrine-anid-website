import React from "react";
import { ReactTyped } from "react-typed";
import "./HeroSection.css";
import DevSvg from "../DevSvg";
import { motion } from "framer-motion";
import DesignSvg from "../DesignSvg";
import { Link as LinkS } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="container hero-section grid ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="image-box"
        >
          <img src="/assets/sa-photo.png" alt="profile-pic" />
        </motion.div>

        <div className="title-box">
          <div className="design-dev-title">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
            >
              <LinkS
                to="ui-ux-design"
                className="svg-link svg-link-design"
                offset={-90}
                smooth={true}
              >
                <DesignSvg />
              </LinkS>
            </motion.div>{" "}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
            >
              <LinkS
                to="front-end-development"
                className="svg-link svg-link-dev"
                offset={-90}
                smooth={true}
              >
                <DevSvg />
              </LinkS>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="designer-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
        >
          <p className="bodytext text-intro text-intro-1">
            Hey, I'm Sandrine from London
          </p>

          <p className="bodytext text-intro text-intro-2">
            I will design & develop a website that you and your audience will
            love!
          </p>

          <div className="btn-box">
            <LinkS
              to="projects"
              offset={-90}
              smooth={true}
              className="btn btn-cta"
            >
              My Projects
            </LinkS>
            <LinkS
              to="contact"
              offset={-90}
              smooth={true}
              className="btn btn-cta"
            >
              Let’s work together
            </LinkS>
          </div>
        </motion.div>

        <div className="developer-box">
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
