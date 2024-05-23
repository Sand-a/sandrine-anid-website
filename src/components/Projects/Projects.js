import React from "react";
import "./Projects.css";

const Projects = ({ projectsData }) => {
  return (
    <>
      <section id="projects" className="section section--3 projects-section">
        <h1 className="primary-headline projects-headline">My Latest work</h1>
        <div className="container grid grid--col-2 projects-cards-wrap">
          {projectsData.map((project) => {
            return <img src={project.thumbnail} alt="" />;
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
