import React, { useEffect, useState, useRef, useContext } from "react";
import "./header.scss";
import { FaHome, FaInfoCircle, FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const { isDark, setIsDark } = useContext(ThemeContext);

  const changeBackground = () => {
    setScrolled(window.scrollY >= 10 ? true : false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

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
