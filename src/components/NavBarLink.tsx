import { Link } from "../data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
interface LinkProps extends Link {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const NavBarLink = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase();
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  console.log(selectedPage);
  return (
    <AnimatePresence>
      <motion.div variants={itemVariants}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBarLink;
