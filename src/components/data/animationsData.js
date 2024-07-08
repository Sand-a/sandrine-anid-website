export const sectionRevealVariants = {
  hidden: { opacity: 0, y: 200 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};
export const containerVariants = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  }),
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: { type: "spring", damping: 30, stiffness: 100 },
  },
  visible: {
    opacity: 1,
    y: -3,
    transition: { type: "spring", damping: 30, stiffness: 100 },
  },
};
