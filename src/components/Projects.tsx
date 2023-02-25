import React, { useEffect, useRef } from "react";
import { projects } from "../data";
import useMediaQuery from "../hooks/useMediaQuery";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Card from "./Card";
import { motion } from "framer-motion";

type ProjectProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Projects = ({ setSelectedPage }: ProjectProps) => {
  const { height, width } = useWindowDimensions();
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  const ref = useRef<HTMLElement>(null);

  const scrollHandler = () => {
    const info = ref?.current?.getBoundingClientRect();
    const top = info?.top;

    if (top) {
      const absoluteTop = Math.abs(top);
      if (absoluteTop < height / 3) {
        setSelectedPage("projects");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="m-4 sm:m-12 md:m-24 flex flex-col justify-center">
        <div className="justify-center ">
          <h1 className="text-6xl font-bold text-center">Projects</h1>
        </div>
        <h1 className="text-[16px] sm:text-xl font-bold text-center text-gray-400 my-5">
          These are the projects I have worked on recently.
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={variants}
          className="flex flex-wrap justify-evenly"
        >
          {projects.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
