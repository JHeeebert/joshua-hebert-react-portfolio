import React from "react";
import logo from "../../assets/logo.jpg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import githubIcon from "../../assets/gitHubIcon.svg";
import mediumIcon from "../../assets/mediumIcon.svg";
import stackOverflowIcon from "../../assets/stackOverflowIcon.svg";

import "./Footer.css";
import "animate.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="./">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="footer-copyright-container">
          <div className="footer-copyright-text">
            <div className="footer-active">
              <p>
                <a
                  href="https://github.com/JHeeebert"
                  className="animate__animated animate__fadeIn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jheeebert"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
                <a
                  href="https://medium.com/@jhebertcocktails"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={mediumIcon}
                    alt="Medium"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
                <a
                  href="https://twitter.com/jheeebert"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    style={{ width: "50px", height: "50px",  }}
                  />
                </a>
                <a
                  href="https://stackoverflow.com/users/21611316/jheeebert"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={stackOverflowIcon}
                    alt="Stack Overflow"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
