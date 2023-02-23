import React, { useState } from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import { links } from "../data";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import NavBarLink from "./NavBarLink";

interface NavbarProps {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-deep-blue";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">HB</h4>

        {/* Desktop NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {links.map((link) => (
              <NavBarLink
                key={link.page}
                page={link.page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-blue p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <IoIosMenu size={30} />
          </button>
        )}
        {/* Mobile NAV */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
            <div className="flex justify-end p-8">
              <button
                className="px-6"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <IoClose size={30} />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {links.map((link) => (
                <NavBarLink
                  key={link.page}
                  page={link.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
