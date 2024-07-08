import React from "react";
import { containerVariants, childVariants } from "../data/animationsData";
import { motion } from "framer-motion";

const SectionHeadline = ({ line1, line2, addClass1, addClass2, position }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="primary-headline "
      style={{ textAlign: position }}
    >
      <motion.div
        style={{
          overflow: "hidden",
        }}
      >
        <motion.p className={addClass1} variants={childVariants}>
          {line1}
        </motion.p>
      </motion.div>
      <motion.div
        style={{
          overflow: "hidden",
        }}
      >
        <motion.p className={addClass2} variants={childVariants}>
          {line2}
        </motion.p>{" "}
      </motion.div>
    </motion.div>
  );
};

export default SectionHeadline;
