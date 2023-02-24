import React, { useEffect, useRef, useState } from "react";
import Dots from "./components/Dots";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./components/Landing";
import Line from "./components/Line";
import Skills from "./components/Skills";
import { motion, useInView } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const home = useRef(null);
  //const isHomeInView = useInView(home);
  //const isSkillsInView = useInView(skills);

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

  // useEffect(() => {
  //   if (isHomeInView) {
  //     console.log(home);
  //     setSelectedPage("home");
  //   } else if (isSkillsInView) {
  //     setSelectedPage("skills");
  //   }
  // }, [isHomeInView, isSkillsInView]);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto h-full">
        {isAboveMediumScreen && (
          <Dots selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <motion.div ref={home}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <Line />
      <div className="w-5/6 mx-auto h-full">
        <motion.div>
          <Skills setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
