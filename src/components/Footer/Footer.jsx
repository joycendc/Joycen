import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <p>Joycen Capili</p>
      <div className="socialIcons">
        <div className="socialLink">
          <a
            href="https://facebook.com/joycenc11"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="icon fb" />
          </a>
          <a
            href="https://github.com/joycendc"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon git" />
          </a>
          <a
            href={{ pathname: "https://twitter.com/oioicen" }}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="icon tt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
