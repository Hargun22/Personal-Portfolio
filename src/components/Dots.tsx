import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { lowerCaseHelper } from "../utils";
import { links } from "../data";

interface DotProps {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Dots = ({ selectedPage, setSelectedPage }: DotProps) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2
    before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      {links.map((link) => (
        <AnchorLink
          key={link.page}
          className={`${
            selectedPage === lowerCaseHelper(link.page)
              ? selectedStyles
              : "bg-dark-grey"
          }
          w-3 h-3 rounded-full`}
          href={`#${lowerCaseHelper(link.page)}`}
          onClick={() => setSelectedPage(link.page)}
        />
      ))}
    </div>
  );
};

export default Dots;
