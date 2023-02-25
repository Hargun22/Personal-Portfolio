import React from "react";
import { Project } from "../data";
import { FaGithub } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

type CardProps = {
  project: Project;
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

const Card = ({ project }: CardProps) => {
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants1}
      viewport={{ once: true }}
      className="bg-[#3e3e3e] p-8 w-[450px] rounded-[30px] m-3 relative"
    >
      <div className="flex flex-col">
        <motion.h1
          variants={variants2}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          {project.name}
        </motion.h1>
        <motion.img
          variants={variants}
          transition={{ duration: 0.5 }}
          className="my-3"
          src={project.image}
          width={400}
        />

        {project.description.map((desc, index) => (
          <motion.p
            variants={variants}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-[15px]"
          >{`- ${desc}`}</motion.p>
        ))}

        <motion.div
          variants={variants4}
          className="my-3 sm:my-6 flex flex-row flex-wrap"
        >
          {project.stack.map((s, index) => (
            <motion.div
              variants={variants3}
              transition={{ duration: 0.2 }}
              className="bg-[#747474] p-1.5 m-0.5 sm:p-2.5 sm:m-1.5 rounded-full"
            >
              <h4 className="text-[8px] sm:text-[11px] text-[#c3c3c3]">{s}</h4>
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
  );
};

export default Card;
