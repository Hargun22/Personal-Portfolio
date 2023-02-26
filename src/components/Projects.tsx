import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import useMediaQuery from "../hooks/useMediaQuery";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Card from "./Card";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
  const [current, setCurrent] = useState<number>(0);

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

  const handleLeft = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(projects.length - 1);
    }
  };

  const handleRight = () => {
    if (current < projects.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <section ref={ref}>
      <div className="py-16 p-10 md:p-20 lg:p-24 flex flex-col justify-center">
        <div className="justify-center ">
          <h1 className="text-4xl xs:text-6xl font-bold text-center">
            Projects
          </h1>
        </div>
        <h1 className=" text-[14px] xs:text-xl font-bold text-center text-gray-400 my-5">
          These are the projects I have worked on recently.
        </h1>
        <div className="flex justify-center">
          <button className="justify-start m-3 xl:hidden" onClick={handleLeft}>
            <div className="rounded-full bg-slate-500/20 p-2">
              <AiOutlineArrowLeft size={isAboveSmallScreen ? 20 : 15} />
            </div>
          </button>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={variants}
            className="flex justify-center xl:flex-wrap xl:justify-evenly max-xl:overflow-hidden w-full max-xl:items-center max-xl:self-center"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                project={project}
                current={current}
                cardKey={index}
              />
            ))}
          </motion.div>
          <button className="justify-end m-3 xl:hidden" onClick={handleRight}>
            <div className="rounded-full bg-slate-500/20 p-2">
              <AiOutlineArrowRight size={isAboveSmallScreen ? 20 : 15} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
