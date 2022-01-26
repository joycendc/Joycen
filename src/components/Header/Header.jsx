import React, { useEffect, useState } from "react";
import "./header.scss";

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
      <h1 className="logo">
        <a className="headLink" href="#home">
          Home
        </a>
        <a className="headLink" href="#about">
          About
        </a>
        <a className="headLink" href="#skills">
          Skills
        </a>
        <a className="headLink" href="#projects">
          Projects
        </a>
        <a className="headLink" href="#contact">
          Contact
        </a>
      </h1>
    </div>
  );
};

export default Header;
