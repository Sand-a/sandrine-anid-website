import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";
import "./Navbar.css";
import SLogoSvg from "../SLogoSvg";
import HamburgerSvg from "../HamburgerSvg";

const Navbar = ({ menuData }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const isMobile = window.innerWidth <= 768;
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
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="header"
      >
        <div className="navbar container">
          <LinkS to="hero" offset={-100} smooth={true} className="navbar-logos">
            <div className="logo-icon">
              <SLogoSvg />
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
          <nav className={menuClicked ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-list">
              {menuData.map((item) => {
                return (
                  <>
                    {isMobile ? (
                      <li key={item._id} className="nav-items">
                        <LinkS
                          onClick={menuClose}
                          activeclassname="active"
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-90}
                          duration={1200}
                        >
                          {item.name}
                        </LinkS>
                      </li>
                    ) : (
                      <motion.li key={item._id} className="nav-items">
                        <LinkS
                          onClick={menuClose}
                          activeclassname="active"
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={1200}
                        >
                          {item.name}
                        </LinkS>
                      </motion.li>
                    )}
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
