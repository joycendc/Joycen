import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link className="headLink" to="/">
          JOYCEN
        </Link>
      </h1>
    </div>
  );
};

export default Header;
