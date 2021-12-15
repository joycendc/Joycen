import React, { useState } from "react";
import "./project.scss";
import { motion } from "framer-motion";

const Project = ({ title }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const [display, setDisplay] = useState("projInfoHidden");

  const showInfo = (e) => {
    e.preventDefault();
    setDisplay("projInfo");
  };

  const hideInfo = (e) => {
    e.preventDefault();
    setDisplay("projInfoHidden");
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className="projectCard">
        <div
          className="project"
          onMouseEnter={(e) => showInfo(e)}
          onMouseLeave={(e) => hideInfo(e)}
        >
          <div className={display}>
            <h1> Project 1{title}</h1>
            <span className="projDesc">
              This app let you post your rants about your life.
            </span>
            <div className="cta">
              <button className="goto">View</button>
            </div>
          </div>
          <img
            alt=""
            src="https://joycendc.github.io/Profile/images//thumb.PNG"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
