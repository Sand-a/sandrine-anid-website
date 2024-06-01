import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import "../Card/Card.css";

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
                    <img src={project.desktop} alt="" />
                  </div>
                  <motion.div
                    variants={swipe}
                    className="project-container project-phone-container"
                  >
                    <img src={project.phone} alt="" />
                  </motion.div>
                </motion.div>
                <div className="project-text">
                  <div>
                    <img
                      className="project-favicon"
                      src={project.favicon}
                      alt="project-favicon"
                    />
                    <h1 className="card-slogan"> {project.project_name}</h1>
                  </div>

                  <p className="bodytext">
                    <b className="card-skills">UI | UX design:</b>including{" "}
                    {project.design}
                  </p>
                  <p className="bodytext ">
                    <b className="card-skills">Developement tools:</b>
                    {project.coding}
                  </p>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.url}
                    className="btn form-btn"
                  >
                    Visit Website
                  </a>
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
