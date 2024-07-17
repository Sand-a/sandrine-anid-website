import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Card.css";

const Card = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "hidden" },
  };

  return (
    <motion.div id={card.id} className="card-container">
      <div className="card-title">
        <img src={card.icon} alt="" />
        <h1>{card.title}</h1>
      </div>
      <div className="card-text">
        <h2 className="card-slogan">{card.slogan}</h2>
        <p className="card-text bodytext">– {card.text}</p>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              className="card-text bodytext"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
            >
              {card.text_readMore}
            </motion.p>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="btn btn-square"
        >
          {isOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: "5px" }}
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
              Read less
            </>
          ) : (
            <>
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginLeft: "5px" }}
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </>
          )}
        </button>
        <p className="bodytext">{card.text_skills}</p>
        <h3 className="card-skills">{card.skills}</h3>
      </div>
    </motion.div>
  );
};

export default Card;
