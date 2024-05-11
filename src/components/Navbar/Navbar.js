import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";

import "./Navbar.css";
import SLogoSvg from "../SLogoSvg";

const Navbar = ({ menuData }) => {
  const [menuClicked, setMenuClicked] = useState(false);
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
      <div className="header">
        <nav className="navbar container">
          <LinkS to="hero" offset={-90} smooth={true} className="navbar-logos">
            {/* <img
              className="logo-icon"
              src="/assets/logo/s-logo-white.svg"
              alt=""
            /> */}
            <div className="logo-icon">
              <SLogoSvg />
            </div>

            <img className="logo-name" src="/assets/logo/logo.svg" alt="" />
          </LinkS>
          <ul className={menuClicked ? "nav-list active" : "nav-list"}>
            {menuData.map((item) => {
              return (
                <>
                  <li key={item._id} className="nav-items">
                    <LinkS
                      activeclassname="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                    >
                      {item.name}
                    </LinkS>
                  </li>
                </>
              );
            })}
          </ul>
          {menuClicked ? (
            <motion.button onClick={menuClose} className="menu-btn">
              <img
                className="hamburger hamburger--close"
                src="/assets/menu_icons/menu-close.svg"
                alt=""
              />
            </motion.button>
          ) : (
            <motion.button onClick={menuOpen} className="menu-btn">
              <img
                className="hamburger hamburger--open"
                src="/assets/menu_icons/menu-open.svg"
                alt=""
              />
            </motion.button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
