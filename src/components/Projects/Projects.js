import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const swipe = {
  initial: { x: -10, zIndex: 1 },
  animate: { x: [50, -30], zIndex: 3 },
};
const Projects = ({ projectsData }) => {
  return (
    <>
      <section id="projects" className="section section--3 projects-section">
        <h1 className="primary-headline projects-headline">My Latest work</h1>
        <div className="container grid grid--col-2 projects-wrap">
          {projectsData.map((project) => {
            return (
              <div className="project-detail">
                <motion.div
                  inital="initial"
                  animate="initial"
                  whileHover="animate"
                  className="project-views"
                >
                  <div className="project-container project-desktop-container">
                    <img src="/assets/projects/aa-website.jpg" alt="" />
                  </div>
                  <motion.div
                    variants={swipe}
                    className="project-container project-phone-container"
                  >
                    <img src="/assets/projects/aa-website-ph.jpg" alt="" />
                  </motion.div>
                </motion.div>
                <div className="project-text">
                  <div>
                    <img
                      className="arrow-right"
                      src="/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <h1> Web Design & Development</h1>
                  </div>

                  <p className="bodytext">
                    <b>UI | UX design:</b> Art direction / logo design /image
                    refinement
                  </p>
                  <p className="bodytext">
                    <b>Front-end dev:</b> CSS React.js
                  </p>

                  <button className="btn">Visit Website</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
