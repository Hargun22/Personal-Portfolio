import React, { useEffect, useRef } from "react";
import { easeIn, motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMedia from "./SocialMedia";
import useWindowDimensions from "../hooks/useWindowDimensions";

type LandingProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const landingVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Landing = ({ setSelectedPage }: LandingProps) => {
  const isAboveMediumcreen = useMediaQuery("(min-width: 1060px)");
  const { height, width } = useWindowDimensions();

  const ref = useRef<HTMLElement>(null);

  const scrollHandler = () => {
    const info = ref?.current?.getBoundingClientRect();
    const top = info?.top;

    if (top) {
      const absoluteTop = Math.abs(top);
      if (absoluteTop < height / 3) {
        setSelectedPage("home");
        console.log(absoluteTop);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="justify-center flex md:justify-start pt-48 pb-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.4, duration: 0.1 }}
        variants={landingVariants}
        className="sm:w-3/4 md:w-5/6"
      >
        <motion.h4
          className=" text-gray-300 px-1 text-[15px] md:text-[25px] md:py-4 py-2"
          variants={landingVariants}
          transition={{ duration: 0.4 }}
        >
          Hi, I'm
        </motion.h4>
        <motion.h1
          variants={landingVariants}
          transition={{ duration: 0.4 }}
          className="text-5xl sm:text-7xl md:text-[8rem] font-bold text-white"
        >
          Hargun Bedi
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-300 md:py-10 py-5"
          variants={landingVariants}
          transition={{ duration: 0.4 }}
        >
          Software Engineer
        </motion.h2>
        <motion.div
          className="w-5/6 sm:w-3/5 md:1/2 "
          variants={landingVariants}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[12px] sm:text-[17px] md:text-[25px] font-bold text-gray-500">
            Checkout my projects and the technologies I have worked with below!
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-start"
          variants={buttonVariants}
          transition={{ duration: 0.5 }}
        >
          <AnchorLink
            className="rounded-md bg-gradient-rainblue p-0.5 mr-2"
            onClick={() => setSelectedPage("skills")}
            href="#skills"
          >
            <div className="text-[12px] sm:text-xl rounded-md bg-[#161616] hover:text-deep-blue hover:bg-gradient-rainblue duration-500 w-full h-full flex items-center justify-center sm:px-10 sm:py-3 px-5 py-1.5">
              Skills
            </div>
          </AnchorLink>
          <AnchorLink
            className="rounded-md bg-gradient-rainblue p-0.5 mr-2"
            onClick={() => setSelectedPage("projects")}
            href="#projects"
          >
            <div className="text-[12px] sm:text-xl rounded-md bg-[#161616] hover:text-deep-blue hover:bg-gradient-rainblue duration-500 w-full h-full flex items-center justify-center sm:px-10 sm:py-3 px-5 py-1.5">
              Projects
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div variants={buttonVariants} transition={{ duration: 0.5 }}>
          <SocialMedia />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;
