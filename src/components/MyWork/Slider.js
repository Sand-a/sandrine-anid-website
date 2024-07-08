import React from "react";
import { motion } from "framer-motion";
import "./Slider.css";
import { register } from "swiper/element/bundle";

register();

const swipe = {
  initial: { x: 0, zIndex: 1 },
  animate: { x: [-100, -50, -100, -50], zIndex: 3 },
};

const Slider = ({ projectsData }) => {
  React.useEffect(() => {
    const swiperContainer = document.querySelector("swiper-container");
    const handleClick = () => {
      swiperContainer.swiper.slideNext();
    };

    swiperContainer.querySelectorAll("swiper-slide img").forEach((img) => {
      img.addEventListener("click", handleClick);
    });

    return () => {
      swiperContainer.querySelectorAll("swiper-slide img").forEach((img) => {
        img.removeEventListener("click", handleClick);
      });
    };
  }, []);
  const isMobile = window.innerWidth <= 650;
  return (
    <section id="slider">
      <div className="container slider-container">
        <div className="swiper" id="swiper-1">
          <div className="swipper-wapper">
            <swiper-container
              className="mySwiper swiper-slide"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                "--swiper-pagination-bullet-size": "15px",
              }}
              navigation-next-el="#nav-right"
              navigation-prev-el="#nav-left"
              pagination="true"
              pagination-clickable="true"
              pagination-dynamic-bullets="true"
              slides-per-view={isMobile ? "1.08" : "1.15"}
              keyboard="true"
              autoplay-delay="6000"
              autoplay-pause-on-mouse-enter="true"
              autoplay-disable-on-interaction="false"
              loop="true"
            >
              {projectsData.map((project) => (
                <swiper-slide key={project._id} className="project-detail">
                  <motion.div
                    initial="initial"
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
                  <figcaption>
                    <div className="project-text">
                      <h1 className="secondary-headline">
                        {project.project_name}
                      </h1>
                      <p className="bodytext project-description">
                        {project.description}
                      </p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.url}
                        className="btn btn-square"
                      >
                        Visit Website
                      </a>
                    </div>
                  </figcaption>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
          <div className="swiper-custom-nav">
            <svg
              id="nav-left"
              className="swiper-button-prev"
              width="39"
              height="73"
              viewBox="0 0 39 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3 70.8H16.8L2.6 38.3C2.3 37.7 2.2 37.1 2.2 36.5C2.2 35.8 2.3 35.2 2.6 34.6L16 4.8C16.7 3.2 18.3 2.2 20 2.2H35.2L19.8 35.6C19.7 35.9 19.6 36.2 19.6 36.6C19.6 36.9 19.7 37.3 19.8 37.6L35.3 70.8ZM38.7 73L21.7 36.5L38.7 0H20.1C17.5 0 15.2 1.5 14.1 3.9L0.6 33.6C0.2 34.5 0 35.4 0 36.4C0 37.3 0.2 38.3 0.6 39.1L15.4 72.9L38.7 73Z"
                fill="black"
              />
              <path
                d="M35.2999 70.8H16.8L2.59995 38.3C2.29995 37.7 2.19995 37.1 2.19995 36.5C2.19995 35.8 2.29995 35.2 2.59995 34.6L16 4.80001C16.7 3.20001 18.3 2.20001 20 2.20001H35.2L19.7999 35.6C19.6999 35.9 19.6 36.2 19.6 36.6C19.6 36.9 19.6999 37.3 19.7999 37.6L35.2999 70.8Z"
                fill="white"
              />
            </svg>
            <svg
              id="nav-right"
              className="swiper-button-next"
              width="39"
              height="73"
              viewBox="0 0 39 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6 36.5C36.6 37.2 36.5 37.8 36.2 38.4L22.7 68.1C22 69.7 20.4 70.7 18.7 70.7H3.5L19 37.4C19.1 37.1 19.2 36.8 19.2 36.4C19.2 36.1 19.1 35.7 19 35.4L3.4 2.1H21.9L36.1 34.6C36.4 35.2 36.6 35.8 36.6 36.5ZM38.7 36.5C38.7 35.6 38.5 34.6 38.1 33.8L23.3 0H0L17 36.5L0 73H18.6C21.2 73 23.5 71.5 24.6 69.1L38.1 39.4C38.5 38.4 38.7 37.4 38.7 36.5Z"
                fill="black"
              />
              <path
                d="M36.6 36.5C36.6 37.2 36.5 37.8 36.2 38.4L22.7 68.1C22 69.7 20.4 70.7 18.7 70.7H3.50002L19 37.4C19.1 37.1 19.2 36.8 19.2 36.4C19.2 36.1 19.1 35.7 19 35.4L3.40002 2.09998H21.9L36.1 34.6C36.4 35.2 36.6 35.8 36.6 36.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
