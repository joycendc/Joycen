import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./project.scss";
import { motion } from "framer-motion";

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
                <Link
                  className="link"
                  to={{
                    pathname: data.link,
                  }}
                  target="_blank"
                >
                  <button className="goto">View</button>
                </Link>
              )}
              {data.src && (
                <Link
                  className="link"
                  to={{
                    pathname: data.src,
                  }}
                  target="_blank"
                >
                  <button className="goto src">Source</button>
                </Link>
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
