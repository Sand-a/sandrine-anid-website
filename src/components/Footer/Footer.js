import React from "react";
import { Link as LinkS } from "react-scroll";
import "./Footer.css";
import SLogoSvg from "../SLogoSvg";

const Footer = ({ menuData }) => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="container footer-text-wrap">
          <div className="footer-links">
            <LinkS to="hero" offset={-100} smooth={true}>
              <SLogoSvg color={"var(--s-light-line)"} opacity={1} />
              <img
                className="logo-name-white"
                src="/assets/logo/logo-white.svg"
                alt="S Logo"
              />
            </LinkS>

            <div className="social-media-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Sand-a"
                className="social-media-icon"
              >
                <img
                  style={{
                    height: "2.8rem",
                    width: "2.8rem",
                    marginRight: "-0.2rem",
                  }}
                  src="/assets/svg/github-icon-white-2.svg"
                  alt="GitHub"
                />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sandrine-anid-7a51282a1"
                className="social-media-icon"
              >
                <img src="/assets/svg/linkedin-icon-white.svg" alt="LinkedIn" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/myveryfirst_bc?igsh=aTZ4dHBzaDFzNzgx"
                className="social-media-icon"
              >
                <img
                  src="/assets/svg/instagram-icon-white.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          <div className="contact-footer-links">
            <div className="contact-link">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26.3 14.8H17L21.7 22.9L17.9 25.1L13.2 17L8.5 25.1L4.7 22.9L9.4 14.8H0V10.3H9.3L4.6 2.2L8.5 0L13.2 8.1L17.9 0L21.7 2.2L17 10.3H26.3V14.8Z" />
              </svg>
              <a href="mailto:sandrine.anid@gmail.com" className="bodytext">
                sandrine.anid@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-signature">
          <p className="bodytext white">
            &copy; <span className="year">{new Date().getFullYear()}</span> –
            Design & Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sandrine-anid-7a51282a1"
              className="sand-signature white"
            >
              Sandrine<b>Anid</b>
            </a>{" "}
            | <i>All rights reserved</i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
