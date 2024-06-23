import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import SLogoSvg from "../SLogoSvg";
import HamburgerSvg from "../HamburgerSvg";

const Navbar = ({ menuData }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const containerVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.1, // Initial delay before starting child animations
      },
    },
    closed: { opacity: 0 },
  };

  const itemVariants = {
    open: { y: "0%", opacity: 1 },
    closed: { y: "25%", opacity: 0 },
  };
  // const isMobile = window.innerWidth <= 975;

  const menuOpen = () => {
    setMenuClicked(true);
    document.body.style.overflow = "hidden";
  };
  const menuClose = () => {
    setMenuClicked(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="header"
      >
        <div className="navbar container">
          <LinkS to="hero" offset={-100} smooth={true} className="navbar-logos">
            <div className="logo-icon">
              <SLogoSvg color={"var(--yellow)"} opacity={0.8} />
            </div>
            <img
              className="logo-name-white"
              src="/assets/logo/logo-white.svg"
              alt="s-logo"
            />
          </LinkS>
          {menuClicked ? (
            <button onClick={menuClose} className="menu-btn">
              <HamburgerSvg menuClicked={menuClicked} menuClose={menuClose} />
            </button>
          ) : (
            <button onClick={menuOpen} className="menu-btn">
              <HamburgerSvg />
            </button>
          )}
          <AnimatePresence>
            {menuClicked ? (
              <motion.div
                key="mobile-nav"
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 },
                }}
                animate="open"
                initial="closed"
                exit="closed"
                className="nav-menu active"
              >
                <motion.ul
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="nav-list"
                >
                  {menuData.map((item) => {
                    return (
                      <motion.li
                        variants={itemVariants}
                        key={item._id}
                        className="nav-items"
                      >
                        <LinkS
                          onClick={menuClose}
                          activeclassname="active"
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={item.mobOffset}
                          duration={1200}
                        >
                          {item.name}
                        </LinkS>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            ) : (
              <motion.div className="nav-menu">
                <ul className="nav-list">
                  {menuData.map((item) => {
                    return (
                      <li key={item._id} className="nav-items">
                        <LinkS
                          onClick={menuClose}
                          activeclassname="active"
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={item.desktopOffset}
                          duration={1200}
                        >
                          {item.name}
                        </LinkS>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
