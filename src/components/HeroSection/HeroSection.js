import React from "react";
// import { ReactTyped } from "react-typed";
import "./HeroSection.css";
import DevSvg from "../DevSvg";
import { motion } from "framer-motion";
import DesignSvg from "../DesignSvg";
import { Link as LinkS } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="container hero-section grid "
        style={{ width: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8, duration: 1 },
          }}
          viewport={{ once: true }}
          className="image-box"
        >
          <img src="/assets/sa-photo.png" alt="sa profile pic" />
        </motion.div>

        <div className="title-box">
          <div className="design-dev-title">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <div className="svg-link svg-link-design">
                <DesignSvg />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="svg-link svg-link-dev">
                <DevSvg />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="designer-box"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 1 },
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="bodytext text-intro text-intro-1">
            Hi, I'm Sandrine from London!
          </p>

          <p className="bodytext text-intro text-intro-2">
            I will design & develop a website that you and your audience will
            love!
          </p>

          <div className="btn-box">
            <LinkS
              to="my-latest-work"
              offset={-90}
              smooth={true}
              className="btn btn-cta"
            >
              My Latest Work
            </LinkS>
            <LinkS
              to="contact"
              offset={-90}
              smooth={true}
              className="btn btn-cta"
            >
              Let’s Work Together
            </LinkS>
          </div>
        </motion.div>

        {/* <div className="developer-box">
          <p className="bodytext developer-text">
            <ReactTyped
              strings={[
                '< html >\n{ useState } from "react";\nonClick = { menuClose }\n grid-template-columns: 1fr ;\n{ CSS3 } media screen\nnpm start',
              ]}
              typeSpeed={60}
            ></ReactTyped>
          </p>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
