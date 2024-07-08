import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import SectionHeadline from "../Utility/SectionHeadline";

const Services = ({ sectionRevealVariants, servicesData, menuData }) => {
  const [openItems, setOpenItems] = useState({}); // Track the IDs of the currently open items

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id], // Toggle the clicked item
    }));
  };
  const arrowMove = {
    initial: { x: -10 },
    animate: { x: [10, -10, 5, -5, 5] },
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const serviceItems = document.querySelectorAll(".service-item");
      let isClickInsideAny = false;
      serviceItems.forEach((item) => {
        if (item.contains(event.target)) {
          isClickInsideAny = true;
        }
      });

      if (!isClickInsideAny) {
        setOpenItems({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="my-services" className="section--2">
      <motion.div
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section skills-section"
      >
        <SectionHeadline line1="my" line2="services" position="center" />

        <ul className="services-list">
          {servicesData.map((service) => {
            const isOpenItem = openItems[service._id];

            return (
              <motion.li
                inital="initial"
                animate="initial"
                whileHover="animate"
                key={service._id}
                className="services-items"
                onClick={() => toggleItem(service._id)}
              >
                <motion.div className="service-item">
                  <h1 className={`skill-title ${isOpenItem ? "open" : ""}`}>
                    {service.name}
                  </h1>
                  <motion.div className="tags">
                    <motion.img
                      className="tag open-tag"
                      src="./assets/svg/open_tag.svg"
                      alt=""
                    ></motion.img>
                    <motion.img
                      variants={arrowMove}
                      className={
                        isOpenItem ? "tag close-tag hidden" : "tag close-tag "
                      }
                      src="./assets/svg/close_tag.svg"
                      alt=""
                    ></motion.img>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="dropdown"
                  initial="hidden"
                  animate={isOpenItem ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, height: 0 },
                    visible: { opacity: 1, height: "auto" },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="service-col-2">
                    <p className="service-line">– {service.line}</p>
                  </div>
                  <div className="skills-row">
                    {service.skills.map((skill) => (
                      <button key={skill} className="btn btn-round btn-skills">
                        {skill}
                      </button>
                    ))}
                    <img
                      className="tag close-tag tag-end"
                      src="./assets/svg/close_tag.svg"
                      alt=""
                    />
                  </div>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Services;
