import React from "react";

import "./HeroSection.css";

import { motion } from "framer-motion";

import { Link as LinkS } from "react-scroll";
import { containerVariants, childVariants } from "../data/animationsData";

const HeroSection = () => {
  const isMobile = window.innerWidth <= 975;
  return (
    <>
      <section
        id="hero"
        className="container hero--section"
        style={{ width: "100%" }}
      >
        <div className="col--1">
          <motion.svg
            id="left-arrow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: false }}
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            x={0}
            y={0}
            style={{
              enableBackground: "new 0 0 448.7 122.6",
            }}
            viewBox="0 0 448.7 122.6"
          >
            <path
              style={{ fill: "var(--black)" }}
              d="m72.6 42.8-33.9 73H15.4l33.9-73h23.3z"
            ></path>
            <path
              viewport={{ once: true }}
              d="M1.1 79.2c0-.8.2-1.6.5-2.3l13.5-29.7c.9-2 2.9-3.3 5-3.3H37l-16.3 35c-.1.1-.1.3-.1.5s0 .3.1.5L37 114.8H16L1.5 81.6c-.2-.8-.4-1.6-.4-2.4z"
              style={{ fill: "#fff" }}
            ></path>
            <path d="M35.3 113.6H16.8L2.6 81.1c-.3-.6-.4-1.2-.4-1.8 0-.7.1-1.3.4-1.9L16 47.6c.7-1.6 2.3-2.6 4-2.6h15.2L19.8 78.4c-.1.3-.2.6-.2 1 0 .3.1.7.2 1l15.5 33.2zm3.4 2.2-17-36.5 17-36.5H20.1c-2.6 0-4.9 1.5-6 3.9L.6 76.4c-.4.9-.6 1.8-.6 2.8 0 .9.2 1.9.6 2.7l14.8 33.8h23.3z"></path>
          </motion.svg>
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
                creative
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
              – I'm will turn your vision into reality!
            </p>
            <LinkS
              to="let-s-connect"
              offset={isMobile ? -40 : 50}
              smooth={true}
            >
              <button className="btn btn-round btn-cta">Let's Connect</button>
            </LinkS>
          </motion.div>
        </div>
        <motion.div
          className="image-container col--2"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { duration: 2 },
          }}
          viewport={{ once: true }}
        >
          <img src="/assets/sa-photo.png" alt="sa profile pic" />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
