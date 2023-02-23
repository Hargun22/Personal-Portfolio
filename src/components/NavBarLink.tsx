import { Link } from "../data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

interface LinkProps extends Link {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const NavBarLink = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase();
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? isAboveSmallScreen
            ? "text-blue"
            : "text-white"
          : ""
      } 
          hover:text-blue transition duration-300
          `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default NavBarLink;
