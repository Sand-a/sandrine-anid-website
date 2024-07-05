import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import MyWork from "./components/MyWork/MyWork";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import { menuData } from "./components/data/menuData";
import { cardsData } from "./components/data/cardsData";
import { servicesData } from "./components/data/servicesData";
import { projectsData } from "./components/data/projectsData";
import Services from "./components/Services/Services";
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
        menuData={menuData}
      />

      <Services
        sectionRevealVariants={sectionRevealVariants}
        servicesData={servicesData}
        menuData={menuData}
      />

      <MyWork
        sectionRevealVariants={sectionRevealVariants}
        projectsData={projectsData}
        menuData={menuData}
      />

      <Contact sectionRevealVariants={sectionRevealVariants} />

      <Footer menuData={menuData} />
    </div>
  );
}

export default App;
