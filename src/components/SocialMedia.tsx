import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";

const SocialMedia = () => {
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex justify-start my-5 sm:my-10 md:gap-8 sm:gap-6 gap-4">
      <a
        className="hover:opacity-50 transition duration-300"
        href="https://www.linkedin.com/in/bedih"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size={isAboveSmallScreen ? 30 : 20} />
      </a>
      <a
        className="hover:opacity-50 transition duration-300"
        href="https://www.github.com/Hargun22"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={isAboveSmallScreen ? 30 : 20} />
      </a>
    </div>
  );
};

export default SocialMedia;
