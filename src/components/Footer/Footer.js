import React from "react";
import { Link as LinkS } from "react-scroll";
import "./Footer.css";
import SLogoSvg from "../SLogoSvg";

const Footer = ({ menuData }) => {
  return (
    <>
      <footer className="footer-section">
        <div className=" footer-container ">
          <div className="container footer-text-warp">
            <div className="footer-links">
              <LinkS to="hero" offset={-100} smooth={true}>
                {" "}
                <SLogoSvg />
                <img
                  className="logo-footer-name"
                  src="/assets/logo/logo-white.svg"
                  alt=""
                />
              </LinkS>

              <div className="social-media-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sandrine-anid-7a51282a1"
                  className="social-media-icon"
                >
                  <img src="/assets/icons/linkedin-icon.svg" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/myveryfirst_bc?igsh=aTZ4dHBzaDFzNzgx"
                  className="social-media-icon"
                >
                  <img src="/assets/icons/instagram-icon.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <a href="mailto:sandrine.anid@gmail.com">
                <img src="/assets/icons/email-icon.svg" alt="" />
              </a>
              <div className="contact-footer-links">
                <a href="mailto:sandrine.anid@gmail.com" className="bodytext">
                  sandrine.anid@gmail.com
                </a>
                <a href="tel:+447747483520" className="bodytext">
                  0044 77 4748 3520
                </a>
              </div>
              <a href="tel:+447747483520">
                <img src="/assets/icons/phone-icon.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="footer-signature">
            <p className="bodytext">
              <b>&copy;</b>
              <span className="year"> {new Date().getFullYear()} </span> Design
              & Developed by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sandrine-anid-7a51282a1"
                className="sand-signature"
              >
                <b>Sandrine Anid</b>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
