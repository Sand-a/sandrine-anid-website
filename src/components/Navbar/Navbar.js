import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";

import "./Navbar.css";
import SLogoSvg from "../SLogoSvg";
import HamburgerSvg from "../HamburgerSvg";

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
        <div className="navbar container">
          <LinkS to="hero" offset={-100} smooth={true} className="navbar-logos">
            <div className="logo-icon">
              <SLogoSvg />
            </div>

            <img className="logo-name" src="/assets/logo/logo.svg" alt="" />
          </LinkS>
          <nav className={menuClicked ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-list">
              {menuData.map((item) => {
                return (
                  <>
                    <li key={item._id} className="nav-items">
                      <LinkS
                        onClick={menuClose}
                        activeclassname="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        <span>{item.name}</span>
                      </LinkS>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>

          {menuClicked ? (
            <button onClick={menuClose} className="menu-btn">
              <HamburgerSvg menuClicked={menuClicked} menuClose={menuClose} />
            </button>
          ) : (
            <button onClick={menuOpen} className="menu-btn">
              <HamburgerSvg />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
