import React from "react";
import { motion } from "framer-motion";

import "./Skills.css";
const Skills = ({ skillsData }) => {
  return (
    <div id="skills" className="section section--2 skills-section">
      <div className="skills-title">
        <h1 className="primary-headline skills-headline">
          My Skills{" "}
          <span>
            <img
              className="eye-icon eye-open"
              src="/assets/icons/eye-open.svg"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,

                repeatDelay: 3,
              }}
              className="eye-icon eye-close"
              src="/assets/icons/eye-close.svg"
              alt=""
            ></motion.img>
          </span>
        </h1>
      </div>
      <div className="container grid grid--col-3 skills-btn-wrape">
        {skillsData.map((skill) => {
          return <button className="btn skills-btn">{skill}</button>;
        })}
      </div>
    </div>
  );
};

export default Skills;
