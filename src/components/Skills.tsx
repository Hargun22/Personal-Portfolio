import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { skills } from "../data";
import useWindowDimensions from "../hooks/useWindowDimensions";

type SkillsProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Skills = ({ setSelectedPage }: SkillsProps) => {
  const { height, width } = useWindowDimensions();
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  const ref = useRef<HTMLElement>(null);

  const scrollHandler = () => {
    const info = ref?.current?.getBoundingClientRect();
    const top = info?.top;

    if (top) {
      const absoluteTop = Math.abs(top);
      if (absoluteTop < height / 3) {
        setSelectedPage("skills");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section ref={ref} id="skills" className="mb-9">
      <div className="m-10 sm:m-16 md:m-24 flex flex-col justify-center">
        <div className="justify-center ">
          <h1 className="text-6xl font-bold text-center">My Skills</h1>
        </div>
        <h1 className="text-[16px] sm:text-xl font-bold text-center text-gray-400 my-5">
          These are the languages, technologies and tools I have experience
          using.
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {skills.map((skill) => (
            <div className="m-5 sm:m-10">
              <div className="flex justify-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  width={isAboveSmallScreen ? 80 : 50}
                  height={isAboveSmallScreen ? 80 : 50}
                />
              </div>
              <h6 className="my-3 text-center sm:text-xl text-sm">
                {skill.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
