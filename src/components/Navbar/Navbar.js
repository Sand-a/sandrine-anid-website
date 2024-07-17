import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";
import "./Navbar.css";
import SLogoSvg from "../SLogoSvg";
import HamburgerSvg from "../HamburgerSvg";

const Navbar = ({ menuData }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const containerVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.1, // Initial delay before starting child animations
      },
    },
    closed: { opacity: 0 },
  };

  const itemVariants = {
    open: { y: "0%", opacity: 1 },
    closed: { y: "25%", opacity: 0 },
  };

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
        <div className={navbar ? "navbar active" : "navbar"}>
          {menuClicked ? (
            <button onClick={menuClose} className="menu-btn">
              <HamburgerSvg
                menuClicked={menuClicked}
                opacity={1}
                color={"var(--accent-color)"}
              />
            </button>
          ) : (
            <button onClick={menuOpen} className="menu-btn">
              <HamburgerSvg
                menuClicked={menuClicked}
                opacity={1}
                color={"var(--accent-color)"}
              />
            </button>
          )}

          {menuClicked ? (
            <div className="nav-menu active">
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
            </div>
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
          <LinkS to="hero" offset={-100} smooth={true} className="navbar-logos">
            <img
              className="logo-name-white"
              src="/assets/logo/logo-black.svg"
              alt="s-logo"
            />
            <div className="logo-icon">
              <SLogoSvg color={"var(--accent-color)"} opacity={1} />
            </div>
          </LinkS>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
