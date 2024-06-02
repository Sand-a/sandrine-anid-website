import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

import WhatIDo from "./components/WhatIDo/WhatIDo";
import { menuData } from "./components/data/menuData";
import { cardsData } from "./components/data/cardsData";
import { skillsData } from "./components/data/skillsData";
import { projectsData } from "./components/data/projectsData";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { motion } from "framer-motion";
import { sectionRevealVariants } from "./components/data/animations";

function App() {
  return (
    <div className="App">
      <Navbar menuData={menuData} />
      <HeroSection />
      <motion.section
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="show"
        viewport="when"
      >
        <WhatIDo cardsData={cardsData} />
      </motion.section>
      <motion.section
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="show"
        viewport="when"
      >
        <Skills skillsData={skillsData} />{" "}
      </motion.section>
      <Projects projectsData={projectsData} />
      <Contact />
      <Footer menuData={menuData} />
    </div>
  );
}

export default App;
