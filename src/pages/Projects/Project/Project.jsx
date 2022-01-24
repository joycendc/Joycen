import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./project.scss";
import { motion } from "framer-motion";
import { MdLanguage } from "react-icons/md";
import { GoCode } from "react-icons/go";

const Project = ({ data }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const [display, setDisplay] = useState("projInfo");

  const showInfo = (e) => {
    e.preventDefault();
    setDisplay("projInfoHidden");
  };

  const hideInfo = (e) => {
    e.preventDefault();
    setDisplay("projInfo");
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className="projectCard">
        <div className="project">
          <div className={display}>
            <h1>{data.name}</h1>
            <span className="projDesc">{data.desc}</span>
            <div className="tags">
              {data.tags.map((tag) => {
                return <p className="tag">{tag}</p>;
              })}
            </div>
            <div className="cta">
              {data.link && (
                <a
                  className="link"
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="goto">{<MdLanguage />} View</button>
                </a>
              )}
              {data.src && (
                <a
                  className="link"
                  href={data.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="goto src">{<GoCode />} Source</button>
                </a>
              )}
            </div>
          </div>
          <div
            onMouseEnter={(e) => showInfo(e)}
            onMouseLeave={(e) => hideInfo(e)}
            className="hoverDiv"
          ></div>
          <img alt={data.name} src={data.img} />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
