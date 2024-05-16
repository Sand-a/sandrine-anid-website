import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

import WhatIDo from "./components/WhatIDo/WhatIDo";
import { menuData } from "./components/data/menuData";
import { cardsData } from "./components/data/cardsData";

function App() {
  return (
    <div className="App">
      <Navbar menuData={menuData} />
      <HeroSection />

      <WhatIDo cardsData={cardsData} />
      <Projects />
    </div>
  );
}

export default App;
