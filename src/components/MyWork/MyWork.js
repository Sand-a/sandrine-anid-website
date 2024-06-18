import React from "react";
import { motion } from "framer-motion";
import "./MyWork.css";
import "../Card/Card.css";

const swipe = {
  initial: { x: -10, zIndex: 1 },
  animate: { x: [50, -30], zIndex: 3 },
};
const MyWork = ({ sectionRevealVariants, projectsData }) => {
  return (
    <>
      <section id="my-latest-work" className="section--3">
        <motion.div
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="section projects-section"
        >
          <h1 className="primary-headline projects-headline">My Latest work</h1>
          <div className="container grid grid--col-2 projects-wrap">
            {projectsData.map((project) => {
              return (
                <div className="project-detail">
                  <motion.a
                    target="_blank"
                    rel="noreferrer"
                    href={project.url}
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
                  </motion.a>
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
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MyWork;
