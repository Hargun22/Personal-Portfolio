import React from "react";
import { Project } from "../data";
import { FaGithub } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

type CardProps = {
  project: Project;
  current: number;
  cardKey: number;
};

const variants3 = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const variants2 = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const variants4 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const variants1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Card = ({ project, current, cardKey }: CardProps) => {
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isAboveLargeScreen = useMediaQuery("(min-width: 1280px)");

  const condition = isAboveLargeScreen ? true : current === cardKey;
  console.log(current, cardKey);
  return condition ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants1}
      viewport={{ once: true }}
      className="bg-[#3e3e3e] p-5 xs:p-8 w-full xl:w-[450px] rounded-[30px] md:m-3 relative "
    >
      <div className="flex flex-col">
        <motion.h1
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          {project.name}
        </motion.h1>
        <motion.img
          variants={variants}
          transition={{ duration: 0.5 }}
          className="my-3"
          src={project.image}
        />

        {project.description.map((desc, index) => (
          <motion.p
            variants={variants}
            transition={{ duration: 0.5 }}
            className="text-[10px] xs:text-[13px] sm:text-[16px]"
          >{`- ${desc}`}</motion.p>
        ))}

        <motion.div
          variants={variants4}
          className="my-4 sm:my-6 flex flex-row flex-wrap"
        >
          {project.stack.map((s, index) => (
            <motion.div
              variants={variants3}
              transition={{ duration: 0.2 }}
              className="bg-[#747474] p-2 m-[3px] sm:p-2.5 sm:m-1.5 rounded-full"
            >
              <h4 className="text-[8px] xs:text-[10px]  sm:text-[12px] text-[#c3c3c3]">
                {s}
              </h4>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={variants}
          transition={{ duration: 0.5 }}
          className="mb-1.5"
        >
          <a
            className="hover:opacity-50 transition duration-300 absolute bottom-5 mx-1.5"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={isAboveSmallScreen ? 30 : 20} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  ) : null;
};

export default Card;
