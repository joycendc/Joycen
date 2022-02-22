import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import { FaHome, FaInfoCircle, FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const ref = useRef(null);

  const changeBackground = () => {
    setScrolled(window.scrollY >= 10 ? true : false);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background

    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    trans();
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  return (
    <div className={`headWrapper ${scrolled && "scrolled"}`}>
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
      <div className="toggleContainer">
        <input
          ref={ref}
          className="toggle container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
          onChange={(e) => setIsDark(!isDark)}
        />

        <label className="toggle_icon" htmlFor="switch">
          {isDark ? (
            <RiSunFill className="tog" />
          ) : (
            <RiMoonFill className="tog" />
          )}
        </label>
      </div>
    </div>
  );
};

export default Header;
