import React, { useEffect, useRef, useState } from "react";
import Dots from "./components/Dots";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./components/Landing";
import Line from "./components/Line";
import Skills from "./components/Skills";
import { motion, useInView } from "framer-motion";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const home = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div
        id="home"
        className="pt-12 w-5/6 mx-auto min-h-full flex items-center justify-center md:justify-start"
      >
        {isAboveMediumScreen && (
          <Dots selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <motion.div ref={home}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <Line />
      <div className="w-full sm:w-5/6 mx-auto min-h-full" id="skills">
        <motion.div>
          <Skills setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <Line />
      <div id="projects" className="w-full xs:w-5/6 mx-auto min-h-[90vh]">
        <motion.div>
          <Projects setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <Line />
      <div id="contact" className="w-full xs:w-5/6 mx-auto min-h-[90vh]">
        <motion.div>
          <Contact setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
