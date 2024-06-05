import * as React from "react";
import { motion } from "framer-motion";
const HamburgerSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 90.2 110.7",
    }}
    viewBox="0 0 90.2 110.7"
    {...props}
  >
    <style>{".st1{fill:#fff}"}</style>
    <motion.path
      animate={props.menuClicked && { opacity: 1 }}
      initial={{ opacity: 0 }}
      id="backline"
      d="m0 19.4 90.2 42.5v29.4L0 48.7z"
      style={{
        opacity: 0.5,
        fill: "#fff",
        enableBackground: "new",
      }}
    />

    <motion.g
      animate={props.menuClicked && { y: 43, transition: { duration: 0.3 } }}
      initial={{ y: 0 }}
      id="up-arrow"
    >
      <path d="M85.4 17.7 48.7.7C47.6.3 46.4 0 45.2 0c-1.1 0-2.3.2-3.4.7L0 19.4v29.4l45.1-21.4 45.1 21.4V25.3c0-3.3-1.9-6.2-4.8-7.6zm2.1 26.7L46.3 24.9c-.4-.2-.8-.3-1.2-.3s-.8.1-1.2.3L2.7 44.4V21.1L42.9 3.2c.7-.3 1.5-.5 2.3-.5s1.6.2 2.3.5l36.7 17c2 .9 3.2 2.9 3.2 5.1v19.1h.1z" />
      <path
        d="M87.5 25.3v19.1L46.3 24.9c-.4-.2-.8-.3-1.2-.3s-.8.1-1.2.3L2.7 44.4V21.1L42.9 3.2c.7-.3 1.5-.5 2.3-.5s1.6.2 2.3.5l36.7 17c2 .9 3.3 2.9 3.3 5.1z"
        className="st1"
      />
    </motion.g>
    <motion.g
      animate={props.menuClicked && { y: -43, transition: { duration: 0.3 } }}
      initial={{ y: 0 }}
      id="down-arrow"
    >
      <path d="M45.1 83.3 0 61.9v23.4c0 3.2 1.9 6.2 4.8 7.5l36.7 17c1.1.5 2.3.8 3.5.8s2.3-.2 3.4-.7l41.8-18.6V61.9L45.1 83.3zm42.4 6.2-40.2 17.9c-.7.3-1.5.5-2.3.5s-1.6-.2-2.3-.5L6 90.5c-2-.9-3.2-2.9-3.2-5.1V66.2L44 85.8c.4.2.8.3 1.2.3s.8-.1 1.2-.3l41.2-19.6v23.3h-.1z" />
      <path
        d="M87.5 66.2v23.3l-40.2 17.9c-.7.3-1.5.5-2.3.5s-1.6-.2-2.3-.5L6 90.5c-2-.9-3.2-2.9-3.2-5.1V66.2L44 85.8c.4.2.8.3 1.2.3s.8-.1 1.2-.3l41.1-19.6z"
        className="st1"
      />
    </motion.g>
  </svg>
);
export default HamburgerSvg;
