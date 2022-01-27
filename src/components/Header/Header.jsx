import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaHome, FaInfoCircle, FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    setScrolled(window.scrollY >= 10 ? true : false);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={scrolled ? "headWrapper scrolled" : "headWrapper"}>
      <div className="logo">
        <a className="headLink" href="#home">
          <FaHome className="icon" />
          Home
        </a>
        <a className="headLink" href="#about">
          <FaInfoCircle className="icon" /> About
        </a>
        {/* <a className="headLink" href="#skills">
          Skills
        </a> */}
        <a className="headLink" href="#projects">
          <FaTools className="icon" /> Projects
        </a>
        <a className="headLink" href="#contact">
          <MdEmail className="icon" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
