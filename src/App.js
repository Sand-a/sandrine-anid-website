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
import { sectionRevealVariants } from "./components/data/animationsData";

function App() {
  return (
    <div className="App">
      <Navbar menuData={menuData} />
      <HeroSection />

      <WhatIDo
        sectionRevealVariants={sectionRevealVariants}
        cardsData={cardsData}
      />

      <Skills
        sectionRevealVariants={sectionRevealVariants}
        skillsData={skillsData}
      />

      <Projects
        sectionRevealVariants={sectionRevealVariants}
        projectsData={projectsData}
      />

      <Contact sectionRevealVariants={sectionRevealVariants} />

      <Footer menuData={menuData} />
    </div>
  );
}

export default App;
